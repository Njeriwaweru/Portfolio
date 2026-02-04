import { useState, useEffect } from 'react';

const useTypewriter = ({titles, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1000}) => {
    const [text, setText] = useState('');
    const [titleIndex, setTitleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTitle = titles[titleIndex];
        
        // If we're done with current word and should move to next
        if (text === currentTitle && !isDeleting) {
            const pauseTimer = setTimeout(() => setIsDeleting(true), pauseTime);
            return () => clearTimeout(pauseTimer);
        }
        
        // If we've deleted everything and should type next word
        if (text === '' && isDeleting) {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
            return;
        }
        
        // Normal typing/deleting
        const timer = setTimeout(() => {
            if (isDeleting) {
                // Delete one character
                setText(currentTitle.substring(0, text.length - 1));
            } else {
                // Type one character
                setText(currentTitle.substring(0, text.length + 1));
            }
        }, isDeleting ? deletingSpeed : typingSpeed);
        
        return () => clearTimeout(timer);
        
    }, [text, isDeleting, titleIndex, titles, typingSpeed, deletingSpeed, pauseTime]);

    return text;
}

export { useTypewriter };
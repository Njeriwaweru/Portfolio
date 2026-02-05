import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            // Send email using EmailJS
            const result = await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            console.log('Email sent successfully:', result.text);
            setIsSubmitted(true);
            
            // Reset form after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                formRef.current.reset();
            }, 3000);
        } catch (err) {
            console.error('Email send error:', err);
            setError('Failed to send message. Please try again or email me directly at njeripraise318@gmail.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <FaEnvelope className="text-3xl" />,
            title: "Email",
            info: "njeripraise318@gmail.com",
            link: "mailto:njeripraise318@gmail.com",
            color: "from-red-500 to-pink-500"
        },
        {
            icon: <FaMapMarkerAlt className="text-3xl" />,
            title: "Location",
            info: "Nairobi, Kenya",
            color: "from-blue-500 to-cyan-500"
        }
    ];

    const socialLinks = [
        {
            icon: <FaLinkedin />,
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/praise-waweru-173955215/",
            color: "hover:bg-blue-600"
        },
        {
            icon: <FaGithub />,
            label: "GitHub",
            url: "https://github.com/Njeriwaweru",
            color: "hover:bg-gray-800"
        },
        {
            icon: <SiGmail />,
            label: "Gmail",
            url: "mailto:njeripraise318@gmail.com",
            color: "hover:bg-red-500"
        }
    ];

    return (
        <section id="contact" className="px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-white text-5xl md:text-7xl font-bold mb-4">
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Touch</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind or want to discuss opportunities? 
                        Feel free to reach out — I'd love to hear from you!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="space-y-8">
                        {/* Contact information */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.link || "#"}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 
                                                 border border-gray-700/50 hover:border-purple-500/50 
                                                 hover:bg-gray-800/70 transition-all duration-300 group"
                                        target={item.link ? "_blank" : "_self"}
                                        rel={item.link ? "noopener noreferrer" : ""}
                                    >
                                        <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color}`}>
                                            <div className="text-white">{item.icon}</div>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold group-hover:text-purple-300 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-400 group-hover:text-gray-300">{item.info}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-4 rounded-full bg-gray-900/50 border border-gray-700/50 
                                                   text-white text-xl ${social.color} 
                                                   hover:scale-110 transition-all duration-300 
                                                   transform hover:shadow-lg hover:shadow-purple-500/20`}
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 
                                     backdrop-blur-sm border border-gray-700/50 shadow-xl">
                            <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
                            <p className="text-gray-400 mb-8">I'll get back to you as soon as possible</p>

                            {/* Error Message */}
                            {error && (
                                <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-red-900/30 to-pink-900/30 
                                             border border-red-700/50 text-red-300">
                                    <div className="flex items-center gap-2">
                                        <FaExclamationTriangle />
                                        <p>{error}</p>
                                    </div>
                                </div>
                            )}

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-300 mb-2">Your Name *</label>
                                        <input
                                            type="text"
                                            name="from_name"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-gray-900/70 border border-gray-700 
                                                     text-white placeholder-gray-500 focus:outline-none 
                                                     focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 
                                                     transition-all duration-300"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            name="reply_to"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-gray-900/70 border border-gray-700 
                                                     text-white placeholder-gray-500 focus:outline-none 
                                                     focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 
                                                     transition-all duration-300"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Subject *</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-900/70 border border-gray-700 
                                                 text-white placeholder-gray-500 focus:outline-none 
                                                 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 
                                                 transition-all duration-300"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Your Message *</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-900/70 border border-gray-700 
                                                 text-white placeholder-gray-500 focus:outline-none 
                                                 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 
                                                 resize-none transition-all duration-300"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting || isSubmitted}
                                    className={`w-full py-3 px-6 rounded-lg font-semibold text-lg
                                             flex items-center justify-center gap-2 transition-all duration-300
                                             ${isSubmitted 
                                                ? 'bg-gradient-to-r from-green-500 to-emerald-600 cursor-default' 
                                                : isSubmitting
                                                ? 'bg-gradient-to-r from-purple-700 to-purple-800 cursor-wait'
                                                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:shadow-purple-500/30'
                                             }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                                            Sending...
                                        </>
                                    ) : isSubmitted ? (
                                        <>
                                            <FaCheck className="text-xl" />
                                            Message Sent!
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane className="text-xl" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>

                            {/* Success Message */}
                            {isSubmitted && (
                                <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-green-900/30 to-emerald-900/30 
                                             border border-green-700/50 text-green-300 animate-pulse">
                                    <p className="text-center">Thank you for your message! I'll get back to you soon.</p>
                                </div>
                            )}
                        </div>

                        {/* Note */}
                        <p className="text-gray-500 text-sm mt-6 text-center">
                            You can also email me directly at{" "}
                            <a href="mailto:njeripraise318@gmail.com" className="text-purple-400 hover:text-purple-300">
                                njeripraise318@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
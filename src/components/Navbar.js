import Link from "./Link"

const Navbar = () => {
    return (
        <nav className="text-white flex h-28 px-8 pt-8 items-center justify-between border-b border-gray-700 pb-12">
            <p className="font-playwrite text-2xl pl-16">Praise Waweru</p>
            <div className="flex justify-between gap-28 pr-36">
                <Link title = "Home" />
                <Link title = "About" />
                <Link title = "Contact" />
            </div>
        </nav>
    )
}

export default Navbar
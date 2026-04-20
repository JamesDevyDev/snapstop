import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="flex items-center px-5 sm:px-10 py-3 sm:py-4 fixed top-0 z-50 ">
            <Link href="/" className="group flex items-center gap-1.5 text-[#E43B37] font-bold text-lg sm:text-xl tracking-tight no-underline font-[Coiny]">
                Snapstop
                <span className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-150 ease-out group-hover:scale-125 group-hover:-translate-y-1">
                    <img src="/assets/icon.png" alt="Snapstop icon" className="w-full h-full object-contain" />
                </span>
            </Link>
        </nav>
    )
}

export default Navbar

import logo from '../assets/logo-brand/veloura_name.png'

function Header() {
    return (
        <header>
            <div className='flex justify-between items-center h-20'>
                <a href="#home" className='shrink-0'><img src={logo} alt="Veloura" className='w-40 sm:w-48'/></a>

                <button className='lg:hidden flex flex-col gap-1 justify-center items-center w-[42px] h-[42px] bg-[#8B5E3C] rounded-md transition-colors duration-200 hover:bg-[#E8DCD1]'>
                    <span className='w-[21px] h-[2px] bg-[#5B514B] rounded-full'></span>
                    <span className='w-[21px] h-[2px] bg-[#5B514B] rounded-full'></span>
                    <span className='w-[21px] h-[2px] bg-[#5B514B] rounded-full'></span>
                </button>

                <div className='hidden lg:flex items-center gap-8'>

                    <ul className='flex items-center gap-5 xl:gap-6 text-sm text-[#5B514B] font-medium'>
                        <li>
                            <a href="#home" className='transition-colors duration-200 hover:text-[#8B5E3C]'>Home</a>
                        </li>
                        <li>
                            <a href="#about"className='transition-colors duration-200 hover:text-[#8B5E3C]'>About</a>
                        </li>
                        <li>
                            <a href="#services"className='transition-colors duration-200 hover:text-[#8B5E3C]'>Services</a>
                        </li>
                        <li>
                            <a href="#gallery"className='transition-colors duration-200 hover:text-[#8B5E3C]'>Gallery</a>
                        </li>
                        <li>
                            <a href="#reviews"className='transition-colors duration-200 hover:text-[#8B5E3C]'>Reviews</a>
                        </li>
                        <li>
                            <a href="#contact"className='transition-colors duration-200 hover:text-[#8B5E3C]'>Contact</a>
                        </li>
                    </ul>

                    <a href="#booking" className='whitespace-nowrap text-sm font-medium px-5 py-3 bg-[#8B5E3C] text-white rounded-full transition-colors duration-200 hover:bg-[#70482F]'>Book Appointment</a>
                </div>
            </div>
        </header>
    )
}

export default Header
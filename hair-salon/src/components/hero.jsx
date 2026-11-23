import hero from '../assets/hero/hero-two.jpeg'

function Hero() {
    return (
        <section id='home' className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 py-10 lg:py-24'>
            <div>

                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6'>Have a taste of elegance</h1>

                <p className='max-w-[50ch] text-base sm:text-lg leading-7 text-[#5B514B] mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nesciunt nam nisi, quae dolores ipsam voluptates at minus harum voluptatem voluptatum tempore optio debitis quo deserunt perferendis, soluta quas natus.</p>

                <div className='flex flex-wrap items-center gap-3'>

                    <a href="#booking" className='whitespace-nowrap text-sm font-medium px-5 py-3 bg-[#8B5E3C] text-white rounded-full transition-colors duration-200 hover:bg-[#70482F]'>Book Appointment</a>

                    <a href="#services" className='whitespace-nowrap text-sm font-medium px-5 py-3 bg-transparent border-2 border-[#8B5E3C] text-[#8B5E3C] rounded-full transition-colors duration-200 hover:bg-[#8B5E3C] hover:text-white'>Explore Services</a>
                </div>

            </div>

            <img src={hero} alt="Professional hairstyling at Veloura salon" className='w-full aspect-[4/5] object-cover rounded-xl'/>
        </section>
    )
}

export default Hero
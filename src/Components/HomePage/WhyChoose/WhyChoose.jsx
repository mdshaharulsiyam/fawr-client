import Subtract from '../../../assets/Subtract.png'

const WhyChoose = () => {
    return (
        <div className='relative my-32 mb-24 '>
            <div className='md:hidden block w-full h-full '>
                <img className='w-full h-full object-cover' src={Subtract} alt="" />
            </div>
            <div className='w-full h-16 bg-white'></div>
            <div className='container mx-auto md:grid md:grid-cols-2 mt-8 flex flex-col justify-start items-start md:justify-between md:items-center'>
                <div className=' w-full h-96 flex z-50 flex-col justify-center items-start'>
                    <h3 className=' mt-5 text-2xl lg:text-5xl font-bold'>Why you should choose our service</h3>
                    <p className='text-lg lg:text-2xl py-5'>With decades of collective experience in design, content writing, animation and production studio service, we're here to serve you.</p>
                    <h4 className='text-xl lg:text-3xl font-bold py-5 pb-2'>We are trusted by more than <span className='text-[#BC312E]'>800</span> clients</h4>
                    <ul className='pl-4 mb-10'>
                        <li className='text-lg lg:text-2xl'>Share your needs with us, and we'll take care of the rest.</li>
                        <li className='text-lg lg:text-2xl'>We’re always available</li>
                        <li className='text-lg lg:text-2xl'>Best in class quality at affordable prices</li>
                    </ul>
                </div>
            </div>
            <div className='w-[49.5%] hidden md:block absolute h-[500px] right-0 bottom-0'>
                <img className='w-full h-full ' src={Subtract} alt="" />
            </div>
            <div className='md:w-[49.5%] w-full bg-[#FFFF00] absolute h-[450px] left-0 bottom-0'>
            </div>
        </div>
    )
}

export default WhyChoose
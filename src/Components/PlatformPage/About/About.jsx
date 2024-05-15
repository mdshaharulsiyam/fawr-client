import Sabrtract2 from '../../../assets/Sabrtract2.png'

const About = () => {
  return (
<div className='relative my-32 mb-24 '>
            <div className='md:hidden block w-full h-full '>
                <img className='w-full h-full object-cover' src={Sabrtract2} alt="" />
            </div>
            <div className='w-full h-16 bg-white'></div>
            <div className='container mx-auto md:grid md:grid-cols-2 mt-8 flex flex-col justify-start items-start md:justify-between md:items-center gap-5'>
                <span></span>
                <div className=' w-full h-96 '>
                    <h4 className='text-xl lg:text-3xl font-bold py-5 pb-2'>ABOUT</h4>
                    <h3 className=' mt-5 text-2xl lg:text-5xl  font-bold text-[#7E7E7E]'>WE THINK GOOD RELATIONSHIPS ARE THE KEY TO PROJECT SUCCESS.</h3>
                </div>
            </div>
            <div className='w-[49.5%] hidden md:block absolute h-[500px] left-0 bottom-0'>
                <img className='w-full h-full ' src={Sabrtract2} alt="" />
            </div>
           
        </div>
  )
}

export default About
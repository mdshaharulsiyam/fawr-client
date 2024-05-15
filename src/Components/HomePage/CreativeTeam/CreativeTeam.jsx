import Vectorbulet from '../../../assets/Vectorbulet.png'
import network from '../../../assets/network.png'

const CreativeTeam = () => {
    return (
        <div className=' py-14'>
            <div className='relative'>
                <div className='container mx-auto md:grid md:grid-cols-2 flex justify-start items-start md:justify-between md:items-center'>
                    <div className='bg-white py-6'>
                        <h3 className='text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium'>Create your ideal creative team with the platform built for winners.</h3>
                    </div>
                </div>
                <span className='absolute right-0 top-0 bg-[#FFFF0066] md:block hidden w-[50%] h-full'></span>
            </div>
            <div className='relative'>
                <div className='container mx-auto md:grid md:grid-cols-2 flex justify-start items-start md:justify-between md:items-center'>
                    <div className=' z-50 pr-5 py-10'>
                        <div className='flex justify-start items-start gap-6 pb-6'>
                            <img className='py-[10px]' src={Vectorbulet} alt="" />
                            <p className='text-base lg:text-xl 2xl:text-2xl'>Connect and collaborate with your internal and external teams.</p>
                        </div>
                        <div className='flex justify-start items-start gap-6'>
                            <img className='py-[10px]' src={Vectorbulet} alt="" />
                            <p className='text-base lg:text-xl 2xl:text-2xl'>Whether you need design work done, content writing, animation or full production service, we have the right people for the job.</p>
                        </div>
                        <button className="btn bg-[#ffff00] font-bold px-14 mt-10 mb-6 border-black rounded-3xl">Get Demo</button>
                    </div>
                    <div className='relative w-full h-full'>
                    <img className='absolute w-[50%] left-8 bottom-0 md:block hidden' src={network} alt="" />
                    </div>
                </div>
                <span className='absolute left-0 top-0 bg-[#FFFF0066] md:w-[50%] w-full h-full'></span>
            </div>
        </div>
    )
}

export default CreativeTeam
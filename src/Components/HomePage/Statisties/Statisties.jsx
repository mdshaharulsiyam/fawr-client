import Rectangle27 from '../../../assets/Rectangle27.png'

const Statisties = () => {
    return (
        <div className='md:grid flex flex-col md:grid-cols-5 gap-6 justify-start items-start md:items-center py-10'>
            <div className='col-span-3 w-full h-full sm:grid flex flex-col grid-cols-2 gap-4'>
                <div className='w-full h-full'>
                    <img src={Rectangle27} className='w-full h-auto' alt="" />
                </div>
                <div className='flex justify-center items-center sm:flex-col gap-4'>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='w-24 h-24 flex justify-center items-center text-2xl lg:text-5xl font-medium border-[7px] border-[#FFFF00] rounded-full text-[#BC312E]'>40%</p>
                        <p className='text-lg lg:text-3xl text-center'>Increase in <br /> output</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='w-24 h-24 flex justify-center items-center text-2xl mt-3 lg:text-5xl font-medium border-[7px] border-[#FFFF00] rounded-full text-[#BC312E]'>20%</p>
                        <p className='text-lg lg:text-3xl text-center'>Faster Turnaround <br /> Time</p>
                    </div>
                </div>
            </div>
            <div className='col-span-2 w-full h-full grid grid-cols-2 gap-6 statisies relative'>
                <div className='flex justify-center items-center flex-col gap-4'>
                    <p className='text-3xl lg:text-5xl 2xl:text-6xl text-[#BC312E] font-bold'>800+</p>
                    <p className='text-lg lg:text-2xl text-center'>Happy Clients</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-4'>
                    <p className='text-3xl lg:text-5xl 2xl:text-6xl text-[#BC312E] font-bold'>400+</p>
                    <p className='text-lg lg:text-2xl text-center'>Projects Done</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-4'>
                    <p className='text-3xl lg:text-5xl 2xl:text-6xl text-[#BC312E] font-bold'>100+</p>
                    <p className='text-lg lg:text-2xl text-center'>Skilled Expert</p>
                </div>
                <div className='flex justify-center items-center flex-col gap-4'>
                    <p className='text-3xl lg:text-5xl 2xl:text-6xl text-[#BC312E] font-bold'>7+</p>
                    <p className='text-lg lg:text-2xl text-center'>Years of <br /> Experience</p>
                </div>
            </div>
        </div>
    )
}

export default Statisties
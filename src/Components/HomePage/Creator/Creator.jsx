import creator from '../../../assets/creator.png'

const Creator = () => {
    return (
        <div className='relative my-14'>
            <div className='container mx-auto md:grid md:grid-cols-2 flex flex-col justify-start items-start md:justify-between md:items-center gap-4 z-50'>
                <div className='w-full h-full'>
                    <img className='w-full h-full object-cover' src={creator} alt="" />
                </div>
                <div className=''>
                    <h3 className='text-[#BC312E] text-3xl lg:text-5xl 2xl:text-7xl pt-4'>Join as Creator</h3>
                    <p className='text-lg lg:text-3xl pt-4'>Apply to join the top 3% exclusive creative community.</p>
                    <span className='flex justify-start md:justify-end items-center w-full md:mt-32 mt-16 mb-6'>
                        <button style={{ boxShadow: '2px 2px 6px #bfbfbf' }}
                            className='px-14 py-3 border font-bold'>Get Started</button>
                    </span>
                </div>
            </div>
            <div className='bg-[#FFFFEA] absolute h-[90%] w-full bottom-0 left-0 -z-10'></div>
        </div>
    )
}

export default Creator
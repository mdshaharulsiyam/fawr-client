import React from 'react'

const OtherCompany = () => {
    return (
        <>
            <h3 className='text-2xl lg:text-[48px] 2xl:text-[64px] text-center py-28 pb-10'>Our Other Companies</h3>
            <div className='flex justify-start gap-3 items-center flex-wrap container mx-auto'>
                <button className={` text-lg lg:text-2xl xl:text-3xl font-semibold`}>BB Digital Media</button>
                <button className={` text-lg lg:text-2xl xl:text-3xl font-semibold`}>BB Creative Corner</button>
                <button className={` text-lg lg:text-2xl xl:text-3xl font-semibold`}>BB Corporate Connect</button>
                <button className={` text-lg lg:text-2xl xl:text-3xl font-semibold`}>BB Wedding</button>
                <button className={` text-lg lg:text-2xl xl:text-3xl font-semibold`}>BB Celebration</button>
                <button className={` text-lg lg:text-2xl xl:text-3xl font-semibold`}>BB Salon</button>
            </div>
            <div className='bg-[#FCFCE9] my-8'>
                <div className='container mx-auto py-14'>
                    <h4 className='text-3xl lg:text-5xl 2xl:text-7xl max-w-[760px]'>Lorem ipsum dolor sit  amet consectetur.</h4>
                    <p className='text-base lg:text-2xl py-10 pb-14 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur. Egestas arcu eu a sit mauris tincidunt non pellentesque.</p>
                    <button className="btn text-lg lg:text-3xl bg-[#ffff00] font-bold px-8 border-black rounded-3xl">
                        Try Now
                    </button>
                </div>
            </div>
        </>
    )
}

export default OtherCompany
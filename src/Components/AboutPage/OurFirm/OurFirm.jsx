import Line from '../../../assets/Line.png'

const OurFirm = () => {
    return (
        <>
            <h4 className='text-center text-2xl lg:text-4xl 2xl:text-6xl font-bold pb-14 pt-20'>Our Firm</h4>
            <div className='container mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 flex justify-start items-start md:items-center flex-col'>
            <div className='w-full h-full relative'>
                    <h5 className='text-lg lg:text-2xl xl:text-3xl font-bold'>What we believe</h5>
                    <p className='text-base lg:text-xl xl:text-2xl py-8 pb-14'>We think those who push themselves to be great should encourage others to do the same. Furthermore, doing the right thing is never simple, but it is always worthwhile.</p>
                    <img className='absolute left-0 bottom-0' src={Line} alt="" />
                </div>
                <div className='w-full h-full relative'>
                    <h5 className='text-lg lg:text-2xl xl:text-3xl font-bold'>What we do</h5>
                    <p className='text-base lg:text-xl xl:text-2xl py-8 pb-14'>Global leaders turn to us to address issues that define their industries. Our distinct method of change management aids in structuring, coordinating, and enabling long-lasting results.</p>
                    <img className='absolute left-0 bottom-0' src={Line} alt="" />
                </div>
                <div className='w-full h-full relative'>
                    <h5 className='text-lg lg:text-2xl xl:text-3xl font-bold'>Media Centre</h5>
                    <p className='text-base lg:text-xl xl:text-2xl py-8 pb-14'>For their distinctive insights and subject-matter expertise, our people are frequently sought out by national, regional, and business media.</p>
                    <img className='absolute left-0 bottom-0' src={Line} alt="" />
                </div>
            </div>
        </>
    )
}

export default OurFirm
import Line from '../../../assets/Line.png'

const Partnership = () => {
    return (
        <>
            <h4 className='text-center text-2xl lg:text-4xl 2xl:text-6xl font-bold pb-14 pt-20'>Results & Partnership</h4>
            <div className='container mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 flex justify-start items-start md:items-center flex-col'>
                <div className='w-full h-full relative'>
                    <h5 className='text-lg lg:text-2xl xl:text-3xl font-bold'>Enduring Results</h5>
                    <p className='text-base lg:text-xl xl:text-2xl py-8 pb-14'>We collaborate with aspirational leaders that want to shape the future rather than run from it. We do great things as a team.</p>
                    <img className='absolute left-0 bottom-0' src={Line} alt="" />
                </div>
                <div className='w-full h-full relative'>
                    <h5 className='text-lg lg:text-2xl xl:text-3xl font-bold'>BCS Alliance Ecosystem</h5>
                    <p className='text-base lg:text-xl xl:text-2xl py-8 pb-14'>For the purpose of enhancing our knowledge and achieving ground-breaking outcomes, we form alliances with top businesses and organisations from across the world.</p>
                    <img className='absolute left-0 bottom-0' src={Line} alt="" />
                </div>
                <div className='w-full h-full relative'>
                    <h5 className='text-lg lg:text-2xl xl:text-3xl font-bold'>Global Affilation</h5>
                    <p className='text-base lg:text-xl xl:text-2xl py-8 pb-14'>With companies that share our values, we have enduring relationships and connections, and our leaders are dedicated to achieving long-term success.</p>
                    <img className='absolute left-0 bottom-0' src={Line} alt="" />
                </div>
            </div>
        </>
    )
}

export default Partnership
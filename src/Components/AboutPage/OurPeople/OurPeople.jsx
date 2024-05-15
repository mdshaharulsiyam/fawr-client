import Line from '../../../assets/Line.png'

const OurPeople = () => {
    return (
        <>
            <h4 className='text-center text-2xl lg:text-4xl 2xl:text-6xl font-bold pb-14 pt-20'>Our People</h4>
            <div className='container mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 flex justify-start items-start md:items-center flex-col'>
                <div className='w-full h-full relative'>
                    <h5 className='text-lg lg:text-2xl xl:text-3xl font-bold'>Culture of Collaboration</h5>
                    <p className='text-base lg:text-xl xl:text-2xl py-8 pb-14'>Working with us feels different, as we are frequently told. Why? a distinctively collaborative atmosphere populated by ardent individuals who are more concerned with your achievement.</p>
                    <img className='absolute left-0 bottom-0' src={Line} alt="" />
                </div>
                <div className='w-full h-full relative'>
                    <h5 className='text-lg lg:text-2xl xl:text-3xl font-bold'>Diversity & Inclusion</h5>
                    <p className='text-base lg:text-xl xl:text-2xl py-8 pb-14'>By embracing diverse viewpoints and beliefs that help us see the world differently, we assist our clients in seeing the world differently.</p>
                    <img className='absolute left-0 bottom-0' src={Line} alt="" />
                </div>
                <div className='w-full h-full relative'>
                    <h5 className='text-lg lg:text-2xl xl:text-3xl font-bold'>Social Impact</h5>
                    <p className='text-base lg:text-xl xl:text-2xl py-8 pb-14'>Promising enterprises that require resources and strategic direction to realise their full potential are the focus of our creative work.</p>
                    <img className='absolute left-0 bottom-0' src={Line} alt="" />
                </div>
            </div>
        </>
    )
}

export default OurPeople
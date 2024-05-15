import bannerBG2 from '../../../assets/bannerBG2.png'

const Banner = () => {
  return (
    <>
      <div className='container mx-auto md:grid md:grid-cols-2 flex flex-col justify-start items-start md:justify-between md:items-center mb-14'>
        <div className='w-full h-full flex justify-center items-start flex-col'>
          <h2 className='2xl:text-7xl xl:text-5xl md:text-3xl text-lg text-[#545454] font-bold'>The Creative platform
            your Business needs</h2>
          <p className='2xl:text-3xl xl:text-2xl md:text-xl text-base font-medium py-10'>With the help of our innovative ideas, services, and solutions, we help startups and businesses develop more quickly and generate more sales and money.</p>
          <button style={{ boxShadow: '2px 2px 6px #bfbfbf' }}
            className='px-14 py-3 border font-bold'>Get Started</button>
        </div>
        <div className='w-full h-full md:block hidden'>
          <img className='w-[75%] h-full object-cover' src={bannerBG2} alt="" />
        </div>
      </div>
      <h3 className='lg:text-[320px] md:text-[150px] text-[90px] lg:leading-[260px] md:leading-[160px] lg:tracking-[-40px]  font-extrabold absolute w-full top-20 left-0 -z-40 text-[#fcf4e6]'>C R E <br /> A T I</h3>
    </>
  )
}

export default Banner
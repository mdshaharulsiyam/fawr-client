import creatorbenifit from '../../../assets/creatorbenifit.png'

const CreatorBenifit = () => {
  return (
    <div className='container mx-auto md:grid md:grid-cols-2 flex flex-col justify-start items-start md:justify-between md:items-center gap-4 z-50'>
    <div className='w-full h-full'>
        <img className='w-full h-full object-cover' src={creatorbenifit} alt="" />
    </div>
    <div className=''>
        <h3 className=' text-3xl lg:text-5xl 2xl:text-7xl'>Know how our creators are benefiting from the platform</h3>
        <span className='flex justify-start items-center w-full md:mt-32 mt-14 mb-6'>
            <button style={{ boxShadow: '2px 2px 6px #bfbfbf' }}
                className='px-14 py-3 font-bold border '>View Creators Profile</button>
        </span>
    </div>
</div>
  )
}

export default CreatorBenifit
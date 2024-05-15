import blog1 from '../../../assets/blog1.png'
import blog2 from '../../../assets/blog2.png'

const Blogs = () => {
    return (
        <>
            <h4 className='text-center  text-2xl lg:text-4xl 2xl:text-6xl pt-24 pb-8'>Featured Blogs</h4>
            <div className='bg-[#FFFBF2] py-14'>
                <div className='container mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 flex justify-start items-start md:items-center flex-col'>
                    <div className='w-full'>
                        <p className='text-base lg:text-2xl '>Welcome to our online collection of blogs, where we write about all the subjects that would be of interest to you and embed clear, concise knowledge in you.</p>
                        <h5 className='text-lg lg:text-2xl xl:text-3xl font-medium py-4 pb-10'>Have fun reading!</h5>
                        <button className='text-lg lg:text-3xl font-bold cursor-pointer bg-[#FFFF00] border border-black rounded-3xl py-1 px-6 '>Read more</button>
                    </div>
                    <div className='w-full'>
                        <div className='w-full h-[200px]'>
                            <img className='w-full h-full object-cover' src={blog1} alt="" />
                        </div>
                        <div className='p-5'>
                            <h5 className='text-lg lg:text-2xl xl:text-3xl font-bold'>Lorem ipsum dolor sit amet consectetur Ipsum.</h5>
                            <p className='text-base lg:text-lg py-4'>Lorem ipsum dolor sit amet consectetur. Egestas netus ut neque neque senectus sapien eu in. Diam sem consectetur a non tellus.</p>
                            <span className='flex justify-end items-center'>
                                <button className='text-lg font-semibold'>{`Read more >`}</button>
                            </span>
                        </div>
                        <div className='border-t p-5 border-black'>
                            <p className='text-[#686868]'>November 28,2022</p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='w-full h-[200px]'>
                            <img className='w-full h-full object-cover' src={blog2} alt="" />
                        </div>
                        <div className='p-5'>
                            <h5 className='text-lg lg:text-2xl xl:text-3xl font-bold'>Lorem ipsum dolor sit amet consectetur Ipsum.</h5>
                            <p className='text-base lg:text-lg py-4'>Lorem ipsum dolor sit amet consectetur. Egestas netus ut neque neque senectus sapien eu in. Diam sem consectetur a non tellus.</p>
                            <span className='flex justify-end items-center'>
                                <button className='text-lg font-semibold'>{`Read more >`}</button>
                            </span>
                        </div>
                        <div className='border-t p-5 border-black'>
                            <p className='text-[#686868]'>November 28,2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs
import hireUs from '../../../assets/hireUs.png'
import { useForm } from "react-hook-form"
const HireUs = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className='container mx-auto py-16'>
            <div className='md:grid md:grid-cols-7 gap-3 flex flex-col justify-start md:justify-center items-start md:items-center'>
                <div className='col-span-3 w-full h-full'>
                    <h5 className='text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold'>HireUs</h5>
                    <h3 className=' text-3xl lg:text-5xl 2xl:text-7xl'>A Project with us?</h3>
                    <div className='w-full h-full'>
                        <img className='h-full w-full object-cover' src={hireUs} alt="" />
                    </div>
                </div>
                <div className='col-span-4 w-full'>
                    <h5 className='text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold'>Service</h5>
                    <div className='w-full  flex flex-wrap justify-between items-center gap-3 py-8'>
                        <button className='xl:py-2 lg:py-[6px] xl:px-6 lg:px-4 py-1 px-2 border border-black rounded-3xl text-lg lg:text-2xl'>Doodle Design</button>
                        <button className='xl:py-2 lg:py-[6px] xl:px-6 lg:px-4 py-1 px-2 border border-black rounded-3xl text-lg lg:text-2xl'>Comic Design</button>
                        <button className='xl:py-2 lg:py-[6px] xl:px-6 lg:px-4 py-1 px-2 border border-black rounded-3xl text-lg lg:text-2xl'>Blogs & Articles</button>
                        <button className='xl:py-2 lg:py-[6px] xl:px-6 lg:px-4 py-1 px-2 border border-black rounded-3xl text-lg lg:text-2xl'>Ads & Commercials</button>
                        <button className='xl:py-2 lg:py-[6px] xl:px-6 lg:px-4 py-1 px-2 border border-black rounded-3xl text-lg lg:text-2xl'>Recording Studio</button>
                        <button className='xl:py-2 lg:py-[6px] xl:px-6 lg:px-4 py-1 px-2 border border-black rounded-3xl text-lg lg:text-2xl'>Other</button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='md:grid grid-cols-2 gap-6 w-full flex flex-col justify-start items-start md:items-start textbla'>
                            <div className='w-full'>
                                <input placeholder='Name' className='text-black w-full outline-none border-b p-2 px-0 border-black' {...register("name", { required: true })} />
                                {errors.name && <p className='text-red-500'>This field is required</p>}
                            </div>
                            <div className='w-full'>
                                <input placeholder='Email' className='text-black w-full outline-none border-b p-2 px-0 border-black' {...register("email", { required: true })} />
                                {errors.email && <p className='text-red-500'>This field is required</p>}
                            </div>

                        </div>
                        <input placeholder='Project Description' className='text-black w-full mt-4 outline-none border-b p-2 px-0 border-black' {...register("desc", { required: true })} />
                        {errors.desc && <p className='text-red-500'>This field is required</p>}
                        <input className='mt-6 text-lg lg:text-3xl font-bold cursor-pointer bg-[#FFFF00] border border-black rounded-3xl py-1 px-6 ' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HireUs
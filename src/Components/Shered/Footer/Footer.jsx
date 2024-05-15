import { MdArrowForwardIos } from "react-icons/md";
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom";

const Footer = () => {
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
        <div className='bg-black text-[#E0E0E0] py-10 mt-14'>
            <div className='py-6 container mx-auto md:grid flex md:grid-cols-2 gap-4 justify-start items-start  flex-col'>
                <div className='w-full'>
                    <h5 className='text-3xl lg:text-5xl 2xl:text-7xl font-bold '>Lorem ipsum dolor sit Lorem</h5>
                </div>
                <div className='w-full'>
                    <h5 className='text-3xl lg:text-5xl 2xl:text-7xl font-bold '>Subscribe</h5>
                    <p className='text-base lg:text-2xl'>Join our community</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-full relative">
                            <input placeholder='Email' className='bg-transparent w-full mt-4 outline-none border-b p-2 px-0 border-white' {...register("email", { required: true })} />
                            {errors.email && <p className='text-red-500'>This field is required</p>}
                            <button className="absolute right-0 top-[50%] translate-y-[-50%]">
                                <MdArrowForwardIos />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="py-6 container mx-auto flex flex-wrap justify-start items-center gap-6">
                <Link className="text-base lg:text-2xl xl:text-3xl" to={`#`}>Platform</Link>
                <Link className="text-base lg:text-2xl xl:text-3xl" to={`#`}>Services</Link>
                <Link className="text-base lg:text-2xl xl:text-3xl" to={`#`}>Company</Link>
                <Link className="text-base lg:text-2xl xl:text-3xl" to={`#`}>Explore</Link>
                <Link className="text-base lg:text-2xl xl:text-3xl" to={`#`}>For Creators</Link>
            </div>
            <div className="border-t border-white pt-6">
                <div className='container mx-auto md:grid flex md:grid-cols-3 gap-4 justify-start items-start  flex-col'>
                    <p className="text-base lg:text-2xl">Copyright © 2022. All rights reserved</p>
                    <div className="col-span-2 flex flex-wrap justify-end items-center gap-6">
                        <Link className="text-base lg:text-2xl xl:text-3xl" to={`#`}>Platform</Link>
                        <Link className="text-base lg:text-2xl xl:text-3xl" to={`#`}>Services</Link>
                        <Link className="text-base lg:text-2xl xl:text-3xl" to={`#`}>Company</Link>
                        <Link className="text-base lg:text-2xl xl:text-3xl" to={`#`}>Explore</Link>
                        <Link className="text-base lg:text-2xl xl:text-3xl" to={`#`}>For Creators</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
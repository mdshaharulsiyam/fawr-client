import useGetAllServiceCategory from '../../../Hooks/useGetAllServiceCategory'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useGetAllServices from '../../../Hooks/useGetAllServices';
const OurService = () => {
    const [category, setCategory] = useState('Graphic Design')
    const { categoryLoading, categorise, refetchCategorise } = useGetAllServiceCategory()
    const { serviceLoading, service, refetchservice } = useGetAllServices(category)

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    const [cursorVariant, setCursorVariant] = useState("default");


    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
        text: {
            height: 80,
            width: 80,
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            backgroundColor: "blue",
            mixBlendMode: "difference"
        }
    }

    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");

    return (
        <div className='container mx-auto py-14 pt-0'>
            <h3 className='text-2xl lg:text-[48px] 2xl:text-[64px] text-center py-28 pb-16'>Our Service</h3>
            <div className='flex justify-around items-center flex-wrap '>
                {
                    categorise?.map(item => <button onClick={() => setCategory(item?._id)} onMouseEnter={textEnter} onMouseLeave={textLeave} className={`${category === item?._id ? ' underline' : ''} text-lg lg:text-2xl xl:text-3xl font-semibold`} key={item?._id}>{item?._id}</button>)
                }
                <motion.div
                    className='cursor'
                    variants={variants}
                    animate={cursorVariant}
                    transition={{ type: 'tween' }}
                />
            </div>
            <div className='my-14 sm:grid sm:grid-cols-2 lg:grid-cols-3 md:gap-3 gap-6 lg:gap-6 flex flex-col justify-start items-start sm:items-center relative '>
                {
                    serviceLoading && <div className="flex items-center justify-center space-x-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
                        <div className="w-8 h-8 rounded-full animate-pulse bg-red-500"></div>
                        <div className="w-8 h-8 rounded-full animate-pulse bg-red-500"></div>
                        <div className="w-8 h-8  rounded-full animate-pulse bg-red-500"></div>
                    </div>
                }

                {
                    service?.map(item => <div key={item?._id} className='w-full h-[300px] rounded-lg overflow-hidden border-black border relative'>
                        <img className='w-full h-full object-cover' src={item?.img} alt="" />
                        <h4 className='absolute bottom-7 w-[80%] pl-3 bg-[#FFFF00] left-0 text-[#211F22] text-xl lg:text-2xl'>{item?.heading}</h4>
                    </div>)
                }

            </div>
        </div>
    )
}

export default OurService
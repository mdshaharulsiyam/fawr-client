import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Ellipse13 from '../../../assets/Ellipse13.png'
const Reviews = () => {
    return (
        <div className='container mx-auto md:grid md:grid-cols-2 flex flex-col gap-6 md:gap-1 justify-start items-start md:justify-between md:items-center py-20'>
            <div>
                <h4 className='text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl '>Testimonials</h4>
                <p className='text-3xl lg:text-5xl 2xl:text-6xl pt-10'>We are Very Glad to Know Our Client Reviews</p>
            </div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className='px-8'>
                        <img className='h-20 w-20 rounded-full ' src={Ellipse13} alt="" />
                        <p className='text-lg lg:text-2xl text-left py-6'>Lorem ipsum dolor sit amet consectetur. Aliquam pretium sed phasellus neque in convallis amet. Adipiscing egestas in nulla vulputate orci purus eget posuere sit. Vitae dolor dictum enim porta non. Lacinia ullamcorper quisque a nisl senectus est quam tincidunt arcu.</p>
                        <p className='text-xl lg:text-3xl text-left pb-8 font-medium'>Wade Warner</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='px-8'>
                        <img className='h-20 w-20 rounded-full ' src={Ellipse13} alt="" />
                        <p className='text-lg lg:text-2xl text-left py-6'>Lorem ipsum dolor sit amet consectetur. Aliquam pretium sed phasellus neque in convallis amet. Adipiscing egestas in nulla vulputate orci purus eget posuere sit. Vitae dolor dictum enim porta non. Lacinia ullamcorper quisque a nisl senectus est quam tincidunt arcu.</p>
                        <p className='text-xl lg:text-3xl text-left pb-8 font-medium'>Wade Warner</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='px-8'>
                        <img className='h-20 w-20 rounded-full ' src={Ellipse13} alt="" />
                        <p className='text-lg lg:text-2xl text-left py-6'>Lorem ipsum dolor sit amet consectetur. Aliquam pretium sed phasellus neque in convallis amet. Adipiscing egestas in nulla vulputate orci purus eget posuere sit. Vitae dolor dictum enim porta non. Lacinia ullamcorper quisque a nisl senectus est quam tincidunt arcu.</p>
                        <p className='text-xl lg:text-3xl text-left pb-8 font-medium'>Wade Warner</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Reviews
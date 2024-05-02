'use client'

import React, { useRef, useState } from 'react';

import { Swiper as SwiperObject } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css'
import './slideshow.css'

import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

export const ProductSlideShow = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

    return (
        <>
            <Swiper
                style={
                    {
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    } as React.CSSProperties
                }
                spaceBetween={10}
                navigation={true}
                thumbs={{ 
                    swiper: thumbsSwiper 
                }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
                autoplay={{
                    delay: 2500
                }}
            >
                <SwiperSlide>
                    <img src="https://minimalin-demo.myshopify.com/cdn/shop/files/shirt_1_x110@2x.png?v=1692372496" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://minimalin-demo.myshopify.com/cdn/shop/files/shirt_2_1024x1024.png?v=1692372496" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://minimalin-demo.myshopify.com/cdn/shop/files/shirt_3_1024x1024.png?v=1692372496" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://minimalin-demo.myshopify.com/cdn/shop/files/shirt_4_1024x1024.png?v=1692372496" />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={20}
                slidesPerView={2}
                breakpoints={{
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                  }}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://minimalin-demo.myshopify.com/cdn/shop/files/shirt_1_x110@2x.png?v=1692372496" className='rounded-custom' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://minimalin-demo.myshopify.com/cdn/shop/files/shirt_2_1024x1024.png?v=1692372496" className='rounded-custom' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://minimalin-demo.myshopify.com/cdn/shop/files/shirt_3_1024x1024.png?v=1692372496" className='rounded-custom' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://minimalin-demo.myshopify.com/cdn/shop/files/shirt_4_1024x1024.png?v=1692372496" className='rounded-custom' />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
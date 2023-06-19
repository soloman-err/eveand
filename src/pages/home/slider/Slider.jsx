import React from 'react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = () => {
  const swipeEvent = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  return (
    <div className="">
      <Swiper
        {...swipeEvent}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img
            className="md:h-[400px] lg:h-[600px] w-full object-cover"
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnQlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-[400px] lg:h-[600px] w-full object-cover"
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGV2ZW50JTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-[400px] lg:h-[600px] w-full object-cover"
            src="https://images.unsplash.com/photo-1575029644286-efb9039cac46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="md:h-[400px] lg:h-[600px] w-full object-cover"
            src="https://images.unsplash.com/photo-1564038123372-4dfe21fd259f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="https://images.unsplash.com/photo-1561489401-fc2876ced162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

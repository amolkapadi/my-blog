import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider() {

     const technologies= [
          {
            "id": 1,
            "name": "HTML",
            "img": "https://example.com/html.png"
          },
          {
            "id": 2,
            "name": "CSS",
            "img": "https://example.com/css.png"
          },
          {
            "id": 3,
            "name": "Bootstrap 5",
            "img": "https://example.com/bootstrap5.png"
          },
          {
            "id": 4,
            "name": "JavaScript",
            "img": "https://example.com/javascript.png"
          },
          {
            "id": 5,
            "name": "jQuery",
            "img": "https://example.com/jquery.png"
          },
          {
            "id": 6,
            "name": "React JS",
            "img": "https://example.com/react.png"
          },
          {
            "id": 7,
            "name": "React Native",
            "img": "https://example.com/react-native.png"
          },
          {
            "id": 8,
            "name": "Material UI",
            "img": "https://example.com/material-ui.png"
          }
     ]
     const cardColors = ['#E64A18', '#264DE4', '#8A0AFC', '#F7E018', '#0868AB', '#61DAFB', '#61DAFB', '#3D80F7'];
      
  return (
    <div className='container py-5'>

    <h3 className='text-center py-5'>Enjoy these helpful lists</h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        
      >
         {technologies.map((tech,index) => (
          <SwiperSlide key={tech.id}>
            <div className="card card-skill" style={{ backgroundColor: cardColors[index % cardColors.length] }}>
              {/* <img src={tech.img} className="card-img-top"  /> */}
              <div className="card-body ">
                <h5 className="card-title fw-bold text-white">{tech.name}</h5>
              
              </div>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
     
    </div>
  );
}

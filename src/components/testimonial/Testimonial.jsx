import React from 'react';
import './testimonial.css'


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import TestimonialData from '../../data/testimonials.json';



const Testimonial=()=>{
{TestimonialData.map(({ id, image, name, review }) => (
  <SwiperSlide key={id} className="testimonial">
    <div className="client_avatar">
      <img src={`/assets/${image}`} alt={name} />
    </div>
    <h5 className='client_name'>{name}</h5>
    <small className='client_review'>{review}</small>
  </SwiperSlide>
))}
 }
export default Testimonial;
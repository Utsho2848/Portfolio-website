import React from 'react';
import './testimonial.css'
import IMG1 from '../../assets/assets/avatar1.jpg'
import IMG2 from '../../assets/assets/avatar2.jpg'
import IMG3 from '../../assets/assets/avatar3.jpg'
import IMG4 from '../../assets/assets/avatar4.jpg'

import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        id: 1,
        image: IMG1,
        name: 'Baby',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptas voluptatem, repudiandae aut illum pariatur dignissimos labore rem. Soluta, est.'
    },
    {
        id: 2,
        image: IMG2,
        name: 'Bodda',
        review: 'DaLorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati soluta rerum iure suscipit fugit explicabo adipisci modi! Quidem.'
    },
    {
        id: 3,
        image: IMG3,
        name: 'Sakibbai',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, incidunt deserunt ipsa soluta est quos animi eligendi distinctio modi, voluptas omnis. Eum porro voluptatem esse.'
    },
    {
        id: 4,
        image: IMG4,
        name: 'Janu',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et accusantium eos expedita vero totam consequatur.'
    },
]
const Testimonial = () => {
    return (
        <section id="testimonial">
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials_container"

                modules={[Pagination, Navigation]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >

                {
                    data.map(({ id, image, name, review }) => {
                        return (
                            <SwiperSlide id={id} className="testimonial">
                                <div className="client_avatar">
                                    <img src={image} alt="" />
                                </div>
                                <h5 className='client_name'>{name}</h5>
                                <small className='client_review'>{review}</small>

                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    );
};

export default Testimonial;
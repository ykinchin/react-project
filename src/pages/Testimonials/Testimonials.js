import React from 'react';

import Title from '../../components/pageTitle/Title';
import TestimonialsSlider from '../../components/testimonialsSlider/TestimonialsSlider';
import { SLIDER_DATA } from '../../components/testimonialsSlider/SliderData'; 

import './styles/Testimonials.css';

const Testimonials = () => {
    
  return (
    <section className='testimonials-section'>
        <div className='testimonials-wrapper testimonials'>
            <div className='testimonials__title'><Title title='Testimonial' subtitle='Making Food great again and again' text='You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.'/></div>
            <div className='testimonials__slider'><TestimonialsSlider slides={SLIDER_DATA}/></div>
        </div>
    </section>
  )
}

export default Testimonials
import React from 'react';

import Button from '../../components/button/Button';
import Title from '../../components/pageTitle/Title';
import './styles/AboutPage.css';
import aboutImg from './images/aboutImg.png';

const AboutPage = () => {
  return (
    <section className='about-section'>
      <div className='about-wrapper about'>
        <div className='about__image'><img src={aboutImg} alt='Our Img' /></div>
        <div className='about__content'>
        <Title title={'About Us'} subtitle={'Food Stalls with Persons but to Product marketing plane catlogues etc to.'} text={'jhasdasjThere are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also equipment make your marketing plane Effective.h'}/>
        <Button className='about__content__btn' path={'/about-us'} text={'Read More'}/>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
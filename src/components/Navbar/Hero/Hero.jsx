import React from 'react'
import './Hero.css';
import hand_icon from '../../../assets/hand_icon.png';
import arrow_icon from '../../../assets/arrow.png';
import hero_image from '../../../assets/hero_image.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
          <h2>New Arrivals Only</h2>
          <div>
            <div className='hero-hand-icon'>
               <p>name</p>
               <img src={hand_icon} alt='icon' />
            </div>
            <p>collactions</p>
            <p>for everyone</p>
          </div>
          <div className='hero-latest-btn'>
             <div>Lettest Colloction</div>
             <img src={arrow_icon} alt='icon' /> 
          </div>
      </div>
      <div className='hero-right'>
          <img src={hero_image} alt='image' />
      </div>
    </div>
  )
}

export default Hero

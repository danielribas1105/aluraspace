import React from 'react';
import './Banner.css';
import banner from '../../assets/images/banner.png';

export default function Banner() {
  return (
    <div className='banner-main'>
      <img src={banner} alt='Banner'/>
    </div>
  )
}

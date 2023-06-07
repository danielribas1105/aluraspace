import React from 'react';
import './Banner.css';
import banner from '../../assets/images/banner.png';

export default function Banner() {
  return (
    <div className='banner-main'>
      <img src={banner} className='banner-img' alt='Imagem da terra vista do espaço'/>
      <label className='banner-label'>A galeria mais completa de fotos do espaço!</label>
    </div>
  )
}

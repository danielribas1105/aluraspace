import React from 'react';
import './Menu.css';
import inicio from '../../assets/icons/home-ativo.png';
import maisVistas from '../../assets/icons/mais-vistas-inativo.png';
import maisCurtidas from '../../assets/icons/mais-curtidas-inativo.png';
import novas from '../../assets/icons/novas-inativo.png';
import surpresas from '../../assets/icons/surpreenda-me-inativo.png';

export default function Menu() {
  return (
    <div className='container-list'>
        <ul className='menu-list'>
            <li className='list-item'>
                <img src={inicio} alt='Menu página inicial'/>
                <a href='#' className='list-link'>Início</a>
            </li>
            <li className='list-item'>
                <img src={maisVistas} alt='Menu fotos mais visitadas'/>
                <a href='#' className='list-link'>Mais vistas</a>
            </li>
            <li className='list-item'>
                <img src={maisCurtidas} alt='Menu mais curtidas'/>
                <a href='#' className='list-link'>Mais curtidas</a>
            </li>
            <li className='list-item'>
                <img src={novas} alt='Menu novas fotos'/>
                <a href='#' className='list-link'>Novas</a>
            </li>
            <li className='list-item'>
                <img src={surpresas} alt='Menu surpeenda-me'/>
                <a href='#' className='list-link'>Surpeenda-me</a>
            </li>
        </ul>
    </div>
  )
}

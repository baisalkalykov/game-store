import React, { useContext,useState } from 'react'
import icon1 from '../icons/icon-top.svg'
import icon2 from '../icons/hader2-icon1.svg'
import icon3 from '../icons/serd.svg'
import icon4 from '../icons/basket.svg'
import { CustomContext } from '../../../context'
import { Link, useNavigate } from 'react-router-dom'
import {animateScroll} from "react-scroll";

import './header.scss'
const Header = () => {
  const {basket} = useContext(CustomContext)
  const navigate = useNavigate()
  const toTop = () => {
    animateScroll.scrollToTop({
        delay: 0,
        duration: 0
    })
};
  return (
  <section className='header'>
    <div className='header__container container'>
        <div className='header__top'>
            <h1 className='header__top__h1'>RU/$</h1>
            <p className='header__top__p'>Накопительный счет</p>
            <ul className='header__top__ul'>
            <Link  to='/goods' className='header__link'>
            <li className='header__li'>Наши товары</li>
            </Link>
             <li className='header__li'>Отзывы</li>
             <li className='header__li'>Гарантии</li>
             <li className='header__li'>Как купить</li>
             
             <li className='header__li'>Заработай</li>
            </ul>
            <div className='header__top__rigth'>
            <p className='header__top__p'>Hanzed Rules</p>
            <img src={icon1} className='icon1'/>
            </div>
        </div>
        <div className='header__center'>
         <img src={icon2} className='icon2'/>
         <h2 className='header__center__p'>Playnchill</h2>
         <div className='header__center__line'>
          <div className='header__center__line1'></div>
          <div className='header__center__line2'></div>
         </div>
         <p className='header__center__p2'>Бесплатно</p>
         <div className='header__center__icons'>
         <img src={icon3} className='icon3'/>
         <div className='header__basket__count'>
         <img src={icon4}  className='header__icon4' onClick={()=>
          navigate('/basket')
        }/>
     <h2 className='header__basket__count__h2'>{basket.length}</h2>
        </div>
         </div>
        </div>
    </div>
    {/* <BasketZero/> */}
  </section>
  
    )
}

export default Header
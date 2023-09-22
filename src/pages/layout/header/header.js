import React, { useContext,useState } from 'react'
import icon1 from '../icons/icon-top.svg'
import icon2 from '../icons/hader2-icon1.svg'
import icon4 from '../icons/basket.svg'
import { CustomContext } from '../../../context'
import { Link, useNavigate } from 'react-router-dom'
import {animateScroll} from "react-scroll";

import './header.scss'
const Header = () => {
  const {basket,user,setUser} = useContext(CustomContext)

  const closeUser = ()=>{
setUser({
  email:'',

})
localStorage.removeItem('user')
  }
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
            <Link to ='/home'  className='header__link'>
            <p className='header__li'>Главная</p>
            </Link>
            <ul className='header__top__ul'>
            <Link  to='/goods' className='header__link'>
            <li className='header__li'>Наши товары</li>
            </Link>
            <Link to= '/reviews'  className='header__link'>
            <li className='header__li'>Отзывы</li>
            </Link>
               <Link to='/garant'  className='header__link'>
             <li className='header__li'> Преимущества</li>
             </Link>
             <Link to='/contacts'className='header__link'>
             <li className='header__li'> Контакты</li>
             </Link>
             <li className='header__li'>О нас</li>
            </ul>
         <div className='header__basket__count'>
         <img src={icon4}  className='header__icon4' onClick={()=>
          navigate('/basket')
        }/>
     <h2 className='header__basket__count__h2'>{basket.length}</h2>
        </div>
       
          {
            user.email==='' ?
            <button onClick={()=>navigate('/login')} className='header__btn'>register</button>
             : <button onClick={closeUser}>выйти</button>
          }
      
        

        </div>
      
    </div>
    
  </section>
  
    )
}

export default Header
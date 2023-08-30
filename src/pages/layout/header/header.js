import React, { useContext,useState } from 'react'
import icon1 from '../icons/icon-top.svg'
import icon2 from '../icons/hader2-icon1.svg'
import icon3 from '../icons/serd.svg'
import icon4 from '../icons/basket.svg'
import { CustomContext } from '../../../context'
import { useNavigate } from 'react-router-dom'

import './header.scss'
import BasketZero from '../../basketZero/basketZero'
const Header = () => {
  const navigate = useNavigate()
    const[basket,setBasket]=useState('')
  const [inputValue,setInputValue]=useState('')
  // if(inputValue.length!==0){
  //   navigate('/search')

  // }
  return (
  <section className='header'>
    <div className='header__container container'>
        <div className='header__top'>
            <h1 className='header__top__h1'>RU/$</h1>
            <p className='header__top__p'>Накопительный счет</p>
            <ul className='header__top__ul'>
             <li className='header__li'>Отзывы</li>
             <li className='header__li'>Гарантии</li>
             <li className='header__li'>Как купить</li>
             <li className='header__li'>Накопительная</li>
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
         <input onChange={(e)=>setInputValue(e.target.value)} type='search' placeholder='Поиск' className='header__center__input'/>
         <p className='header__center__p2'>Бесплатно</p>
         <div className='header__center__icons'>
         <img src={icon3} className='icon3'/>
         <div className='header__basket__count'>
         <img src={icon4}  className='header__icon4' onClick={()=>
          navigate('/basket')
        }/>
        {basket.length}
        </div>
         </div>
        </div>
    </div>
    {/* <BasketZero/> */}
  </section>
  
    )
}

export default Header
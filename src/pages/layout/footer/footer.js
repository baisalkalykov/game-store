import React from 'react'
import pay from '../../image/PayPal.png'
import visa from '../../image/Visa.png'
import mastercard from '../../image/mastercard 2.png'
import web from '../../image/WebMoney.png'
import mir from '../../image/Mir.png'
import bank1 from '../icons/bank1.svg'
import bank2 from '../icons/bank2.svg'
import icons from '../icons/footer-icons.svg'
import './footer.scss'
const Footer = () => {
  return (
    <section className='footer'>
        <div className='footer__container container'>
            <div className='footer__img'>
            <img src={pay}/>
            <img src={mastercard}/>
            <img src={mir}/>
            <img src={visa}/>
            <img src={web}/>
            <img src={pay}/>
            <img src={pay}/>
            </div>
            <div className='footer__title'>
              <ul className='footer__ul'>
                <li className='footer__li__act'>О компании</li>
                <li className='footer__li'>О нас</li>
                <li className='footer__li'>Вакансии</li>
                <li className='footer__li'>Реквизиты</li>
              </ul>
              <ul className='footer__ul'>
                <li className='footer__li__act'>Договор оферты</li>
                <li className='footer__li'>Каталог</li>
                <li className='footer__li'>Акции</li>
                <li className='footer__li'>Личный кабинет</li>
              </ul>
              <ul className='footer__ul'>
                <li className='footer__li__act'>Договор оферты</li>
                <li className='footer__li'>Каталог</li>
                <li className='footer__li'>Акции</li>
                <li className='footer__li'>Личный кабинет</li>
              </ul>
              <div className='footer__bank'>
                <div className='footer__bank__one'>
                  <img src={bank1}/>
                  <div className='foter__bank__title'>
                  <p className='footer__bank__p'>verified</p>
                  <p className='footer__bank__p2'>WebMoney</p>
                  </div>
                </div>
                <div className='footer__bank__one'>
                  <img src={bank2}/>
                  <div className='foter__bank__title'>
                  <p className='footer__bank__p'>Safe Browsing</p>
                  <p className='footer__bank__p2'>Google</p>
                  </div>
                </div>
              </div>
            </div>
            <p className='footer__text'>Все продаваемые ключи закупаются у официальных дистрибьюторови издателей. В том числе у 1С-СофтКлаб, Бука, Новый Диск и Enaza</p>
            <div className='footer__bottom'>
             <p className='footer__bottom__p1'>Правовая информация</p>
             <p className='footer__bottom__p2'>Интернет-магазин игр «Playnchill» © 2022 </p>
             <img src={icons}/>
            </div>
        </div>
    </section>
  )
}

export default Footer
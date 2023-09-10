import React from 'react'
import car from '../../image/car.png'
import nes from '../../image/nes-logo.svg'
import './sec1.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import 'swiper/css'; 
const Sec1 = () => {
  return (
    <section className='sec1'>
       <div className='sec1__container container'>
       <Swiper
                    loop={true}
                    autoplay={{
                      delay:2500,
                    disableOnInteraction:false
                    }}
                    modules={[Autoplay]}
                   
              
                    >
                      <SwiperSlide>
         <div className='sec1__card'>
            <img src={car} className=' sec1__car'/>
            <img src={nes} className='sec1__card__logo'/>
            <p className='sec1__card__title'>Тотальная война нового поколения началась!<br/> Сыграйте в Battlefield™ 2042 уже сегодня.<br/> Адаптируйтесь и процветайте!</p>
            <div className='sec1__card__prise'>
              <h2 className='sec1__card__prise__h2'>4 999 Р</h2>
              <p className='sec1__card__prise__p1'>-25%</p>  
              <p className='sec1__card__prise__p2'>6 999 Р</p>              
            </div>
            <div className='sec1__card__btns'>
              <button className='sec1__card__btn1'>В корзину</button>
              <button className='sec1__card__btn2'>В избранное</button>
            </div>
         </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='sec1__card'>
            <img src={car} className=' sec1__car'/>
            <img src={nes} className='sec1__card__logo'/>
            <p className='sec1__card__title'>Тотальная война нового поколения началась!<br/> Сыграйте в Battlefield™ 2042 уже сегодня.<br/> Адаптируйтесь и процветайте!</p>
            <div className='sec1__card__prise'>
              <h2 className='sec1__card__prise__h2'>4 999 Р</h2>
              <p className='sec1__card__prise__p1'>-25%</p>  
              <p className='sec1__card__prise__p2'>6 999 Р</p>              
            </div>
            <div className='sec1__card__btns'>
              <button className='sec1__card__btn1'>В корзину</button>
              <button className='sec1__card__btn2'>В избранное</button>
            </div>
         </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='sec1__card'>
            <img src={car} className=' sec1__car'/>
            <img src={nes} className='sec1__card__logo'/>
            <p className='sec1__card__title'>Тотальная война нового поколения началась!<br/> Сыграйте в Battlefield™ 2042 уже сегодня.<br/> Адаптируйтесь и процветайте!</p>
            <div className='sec1__card__prise'>
              <h2 className='sec1__card__prise__h2'>4 999 Р</h2>
              <p className='sec1__card__prise__p1'>-25%</p>  
              <p className='sec1__card__prise__p2'>6 999 Р</p>              
            </div>
            <div className='sec1__card__btns'>
              <button className='sec1__card__btn1'>В корзину</button>
              <button className='sec1__card__btn2'>В избранное</button>
            </div>
         </div>
         </SwiperSlide>
         </Swiper>
    </div>
    </section>
  )
}

export default Sec1
import React from 'react'
import './reviews.scss'
import rev from './reviews-img/review.png'
import star from './reviews-img/Star.svg'
import img1 from './reviews-img/image 1.png'
import img2 from './reviews-img/image 2.png'
import img3 from './reviews-img/image 3.png'
const Reviews = () => {
  return (
    <section className='reviews'>
        <div className='reviews__container container'>
            <div className='reviews__box'>
              <div className='reviews__box__svg'>
              <img src={star} className='box__svg'/>
              <img src={star} className='box__svg'/>
              <img src={star} className='box__svg'/>
              <img src={star} className='box__svg'/>
              <img src={star} className='box__svg'/>
              </div>
              
            </div>
            <div className='reviews__cards'>
                <div className='reviews__card'>
                <img src={img1} className='reviews__card__img'/>
                 <p className='reviews__card__p1'>Bionic Commando: Rearmed - ключ Steam</p>
                 <p className='reviews__card__p2'>Положительный <span className='reviews__card__span'>28.08.2021</span> </p>
                 <p className='reviews__card__p3'>Ключ купил. Хороший сайт, всем <br/> рекомендую!</p>
                </div>

                <div className='reviews__card'>
                <img src={img2} className='reviews__card__img'/>
                 <p className='reviews__card__p1'>Bionic Commando: Rearmed - ключ Steam</p>
                 <p className='reviews__card__p2'>Положительный <span className='reviews__card__span'>28.08.2021</span> </p>
                 <p className='reviews__card__p3'>Всё супппеееррр!</p>
                </div>

                <div className='reviews__card'>
                <img src={img3} className='reviews__card__img'/>
                 <p className='reviews__card__p1'>Bionic Commando: Rearmed - ключ Steam</p>
                 <p className='reviews__card__p2'>Положительный <span className='reviews__card__span'>28.08.2021</span> </p>
                 <p className='reviews__card__p3'>Шикаррную игру взял по отличной <br/> цене!!! Всем советую брать тут!%6</p>
                </div>

                <div className='reviews__card'>
                <img src={img1} className='reviews__card__img'/>
                 <p className='reviews__card__p1'>Bionic Commando: Rearmed - ключ Steam</p>
                 <p className='reviews__card__p2'>Положительный <span className='reviews__card__span'>28.08.2021</span> </p>
                 <p className='reviews__card__p3'>Ключ купил. Хороший сайт, всем <br/> рекомендую!</p>
                </div>

                <div className='reviews__card'>
                <img src={img2} className='reviews__card__img'/>
                 <p className='reviews__card__p1'>Bionic Commando: Rearmed - ключ Steam</p>
                 <p className='reviews__card__p2'>Положительный <span className='reviews__card__span'>28.08.2021</span> </p>
                 <p className='reviews__card__p3'>Всё супппеееррр!</p>
                </div>

                <div className='reviews__card'>
                <img src={img3} className='reviews__card__img'/>
                 <p className='reviews__card__p1'>Bionic Commando: Rearmed - ключ Steam</p>
                 <p className='reviews__card__p2'>Положительный <span className='reviews__card__span'>28.08.2021</span> </p>
                 <p className='reviews__card__p3'>Шикаррную игру взял по отличной <br/> цене!!! Всем советую брать тут!%6</p>
                </div>

                <div className='reviews__card'>
                <img src={img1} className='reviews__card__img'/>
                 <p className='reviews__card__p1'>Bionic Commando: Rearmed - ключ Steam</p>
                 <p className='reviews__card__p2'>Положительный <span className='reviews__card__span'>28.08.2021</span> </p>
                 <p className='reviews__card__p3'>Ключ купил. Хороший сайт, всем <br/> рекомендую!</p>
                </div>

                <div className='reviews__card'>
                <img src={img2} className='reviews__card__img'/>
                 <p className='reviews__card__p1'>Bionic Commando: Rearmed - ключ Steam</p>
                 <p className='reviews__card__p2'>Положительный <span className='reviews__card__span'>28.08.2021</span> </p>
                 <p className='reviews__card__p3'>Всё супппеееррр!</p>
                </div>

                <div className='reviews__card'>
                <img src={img3} className='reviews__card__img'/>
                 <p className='reviews__card__p1'>Bionic Commando: Rearmed - ключ Steam</p>
                 <p className='reviews__card__p2'>Положительный <span className='reviews__card__span'>28.08.2021</span> </p>
                 <p className='reviews__card__p3'>Шикаррную игру взял по отличной <br/> цене!!! Всем советую брать тут!%6</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Reviews
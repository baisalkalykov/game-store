import React from 'react'
import maks from './garant-img/Скриншот 13-09-2023 184859.jpg'
import icon1 from './garant-img/icon.png'
import icon2 from './garant-img/done.png'
import icon3 from './garant-img/bus.png'
import icon4 from './garant-img/qw.png'
import icon5 from './garant-img/mon.png'
import icon6 from './garant-img/skid.png'
import icon7 from './garant-img/arrow.png'
import icon8 from './garant-img/dob.png'
import './garant.scss'
const Garant = () => {
  return (
    <section className='garant'>
        <div className='garant__container'>
            <div className='garant__title'>
                <h1 className='garant__title__h1'>Наши преимущества</h1>
                <img src={maks} className='garant__title__img'/>
            </div>
            <div className='garant__cards'>
            <div className='garant__card'>
              <div className='garant__card__title'>
                <img src={icon1} className='garant__card__img'/>
                <h2 className='garant__card__h2'>Реальные <br/> отзывы</h2>
              </div>
              <p className='garant__card__p'>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Maecenas felis, dictum semper sem a. Justo, <br/> eget luctus faucibus vitae tincidunt sit faucibus <br/> sollicitudin. Lectus senectus in tempus, amet, nam <br/> nec. Enim amet nec cras quis felis nullam porta<br/> lorem ante. Odio.
              </p>

            </div>
            <div className='garant__card'>
              <div className='garant__card__title'>
                <img src={icon2} className='garant__card__img'/>
                <h2 className='garant__card__h2'>Безопасность <br/>продукта</h2>
              </div>
              <p className='garant__card__p'>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Maecenas felis, dictum semper sem a. Justo, <br/> eget luctus faucibus vitae tincidunt sit faucibus <br/> sollicitudin. Lectus senectus in tempus, amet, nam <br/> nec. Enim amet nec cras quis felis nullam porta<br/> lorem ante. Odio.
              </p>

            </div>
            <div className='garant__card'>
              <div className='garant__card__title'>
                <img src={icon3} className='garant__card__img'/>
                <h2 className='garant__card__h2'>Быстрая <br/>доставка</h2>
              </div>
              <p className='garant__card__p'>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Maecenas felis, dictum semper sem a. Justo, <br/> eget luctus faucibus vitae tincidunt sit faucibus <br/> sollicitudin. Lectus senectus in tempus, amet, nam <br/> nec. Enim amet nec cras quis felis nullam porta<br/> lorem ante. Odio.
              </p>

            </div>
            <div className='garant__card'>
              <div className='garant__card__title'>
                <img src={icon4} className='garant__card__img'/>
                <h2 className='garant__card__h2'>Техническая <br/>поддержка</h2>
              </div>
              <p className='garant__card__p'>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Maecenas felis, dictum semper sem a. Justo, <br/> eget luctus faucibus vitae tincidunt sit faucibus <br/> sollicitudin. Lectus senectus in tempus, amet, nam <br/> nec. Enim amet nec cras quis felis nullam porta<br/> lorem ante. Odio.
              </p>

            </div>
            <div className='garant__card'>
              <div className='garant__card__title'>
                <img src={icon5} className='garant__card__img'/>
                <h2 className='garant__card__h2'>Безопасные <br/>платежи</h2>
              </div>
              <p className='garant__card__p'>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Maecenas felis, dictum semper sem a. Justo, <br/> eget luctus faucibus vitae tincidunt sit faucibus <br/> sollicitudin. Lectus senectus in tempus, amet, nam <br/> nec. Enim amet nec cras quis felis nullam porta<br/> lorem ante. Odio.
              </p>

            </div>
            <div className='garant__card'>
              <div className='garant__card__title'>
                <img src={icon6} className='garant__card__img'/>
                <h2 className='garant__card__h2'>Низкие <br/>цены</h2>
              </div>
              <p className='garant__card__p'>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Maecenas felis, dictum semper sem a. Justo, <br/> eget luctus faucibus vitae tincidunt sit faucibus <br/> sollicitudin. Lectus senectus in tempus, amet, nam <br/> nec. Enim amet nec cras quis felis nullam porta<br/> lorem ante. Odio.
              </p>

            </div>
            <div className='garant__card'>
              <div className='garant__card__title'>
                <img src={icon7} className='garant__card__img'/>
                <h2 className='garant__card__h2'>Гарантия <br/> возврата денег</h2>
              </div>
              <p className='garant__card__p'>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Maecenas felis, dictum semper sem a. Justo, <br/> eget luctus faucibus vitae tincidunt sit faucibus <br/> sollicitudin. Lectus senectus in tempus, amet, nam <br/> nec. Enim amet nec cras quis felis nullam porta<br/> lorem ante. Odio.
              </p>

            </div>
            <div className='garant__card'>
              <div className='garant__card__title'>
                <img src={icon8} className='garant__card__img'/>
                <h2 className='garant__card__h2'>Сертификаты <br/> гарантии</h2>
              </div>
              <p className='garant__card__p'>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Maecenas felis, dictum semper sem a. Justo, <br/> eget luctus faucibus vitae tincidunt sit faucibus <br/> sollicitudin. Lectus senectus in tempus, amet, nam <br/> nec. Enim amet nec cras quis felis nullam porta<br/> lorem ante. Odio.
              </p>

            </div>

            </div>
        </div>
    </section>
  )
}

export default Garant
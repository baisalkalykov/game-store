import React from 'react'
import colla from '../../image/colla.png'
import ais from '../../image/ais.png'
import './advertising.scss'

const Advertising = () => {
  return (
    <section className='advertising'>
        <div className='advertising__container'>
            <div className='advertising__colla'>
             <img src={colla} className='advertising__colla' />
            </div>
            <p className='advertising__p'>Свежее в блоге</p>
            <div className='advertising__cards'>
                <div className='advertising__card'>
                    <img src={ais} className='advertising__card__img'/>
                    <p className='advertising__card__p'>Да как так-то борются с пиратством?</p> 
                    <p className='advertising__card__p1'>Скримеры — только верхушка айсберга <br/> ужаса</p> 
                    <p className='advertising__card__p2'>14 Октября 2021</p> 
                </div>
                <div className='advertising__card'>
                    <img src={ais} className='advertising__card__img'/>
                    <p className='advertising__card__p'>Да как так-то борются с пиратством?</p> 
                    <p className='advertising__card__p1'>Скримеры — только верхушка айсберга <br/> ужаса</p> 
                    <p className='advertising__card__p2'>14 Октября 2021</p> 
                </div>
                <div className='advertising__card'>
                    <img src={ais} className='advertising__card__img'/>
                    <p className='advertising__card__p'>Да как так-то борются с пиратством?</p> 
                    <p className='advertising__card__p1'>Скримеры — только верхушка айсберга <br/> ужаса</p> 
                    <p className='advertising__card__p2'>14 Октября 2021</p> 
                </div>
            </div>
            <div className='advertising__box'>
                <p className='advertising__box__p'>Все публикации</p>
            </div>
        </div>
    </section>
  )
}

export default Advertising
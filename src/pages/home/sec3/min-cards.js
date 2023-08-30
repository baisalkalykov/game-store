import React from 'react'
import './min-cards.scss'
import min1 from '../../image/min1.png'
import min2 from '../../image/min2.png'
const MinCards = () => {
  return (
    <section className='minCards'>
        <div className='minCards__container container'>
            <div className='minCards__cards'>
                <div className='minCards__card'>
                    <p className='minCards__card__p'>Играй уже сейчас в <br/> Minecraft</p>
                    <div className='minCards__card__prise'>
                        <p className='minCards__card__prise_p'>4 999 Р</p>
                        <p className='minCards__card__prise_p'>-25%</p>
                        <p className='minCards__card__prise_p'>6 999 Р</p>
                    </div>
                    <div className='minCards__card__btn'>
                        <button className='minCards__card__btn1'>Купить</button>
                        <button className='minCards__card__btn1'>В избранное</button>
                    </div>
                    <img src={min1} className='minCards__card__min1'/>
                </div>
                <div className='minCards__card'>
                    <p className='minCards__card__p'>Играй уже сейчас в <br/> Minecraft dangerous</p>
                    <div className='minCards__card__prise'>
                        <p className='minCards__card__prise_p'>4 999 Р</p>
                        <p className='minCards__card__prise_p'>-25%</p>
                        <p className='minCards__card__prise_p'>6 999 Р</p>
                    </div>
                    <div className='minCards__card__btn'>
                        <button className='minCards__card__btn1'>Купить</button>
                        <button className='minCards__card__btn1'>В избранное</button>
                    </div>
                    <img src={min2} className='minCards__card__min2'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MinCards
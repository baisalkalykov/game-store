import React, { useContext } from 'react'
import { CustomContext } from '../../../context'
import { Link } from 'react-router-dom'
import './cards.scss'
import {animateScroll} from "react-scroll";
const Cards = () => {
    const{game}= useContext(CustomContext);

    const toTop = () => {
      animateScroll.scrollToTop({
          delay: 0,
          duration: 0
      })
  };
  return (
    <section className='cards'>
        <div className='cards__container container'>
            <ul className='cards__ul'>
                <li className='cards__ul__li'>Новинки</li>
                <li className='cards__ul__li'>Аккаунты</li>
                <li className='cards__ul__li'>Ключи</li>
                <li className='cards__ul__li'>Активация</li>
                <li className='cards__ul__li'>Прокачка</li>
            </ul>
            <div className='cards__box'>
              {game.slice(0,12).map((el)=>
              <div className='cards__box__card'>
                  <Link onClick={()=>toTop()} to={`onegame/${el.id}`}>
                <img src={el.image} className='cards__box__card__img'/>
                </Link>
                <div className='game__card__title'>
                        <h4 className='cards__box__card__h4'>{el.prise} <span className='span1'>-15%</span> <span className='span2'>16 400 P</span> </h4>
                        <h3 className='cards__box__card__h3'>{el.name}</h3>
                        <div class="cards__box__card__checkbox">
                            <input type="checkbox" class="custom-checkbox" id="happy" name="happy" value="yes"/>
                            <label for="happy" class="check__p">Ключ</label>
                           <input type="checkbox" class="custom-checkbox" id="happy" name="happy" value="yes"/>
                           <label for="happy" class="check__p">Аккаунт Steam</label>
                            </div>
                            </div> 
                                <button className='cards__box__card__btn'>В корзину</button>
              </div>
              )}
            </div>
            <div className='cards__katolog'>
              <p className='cards__katolog__p'>Перейти в каталог</p>
            </div>
        </div>
    </section>
  )
}

export default Cards
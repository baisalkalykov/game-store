import React, { useContext } from 'react'
import { CustomContext } from '../../../context'
import { Link } from 'react-router-dom'
import './discounts.scss'
import {animateScroll} from "react-scroll";

const Discounts = () => {
  const{game}= useContext(CustomContext);

  const toTop = () => {
    animateScroll.scrollToTop({
        delay: 0,
        duration: 0
    })
};
  return (
    <section className='discounts'>
        <div className='discounts__container container'>
            <p className='discounts__p'>Акции и скидки  <span className='span1'>%</span></p>
            <div className='discounts__cards'>
              {game.slice(12,14).map((el)=>
              <div className='discounts__card'>
                <Link onClick={()=>toTop()} to={`onegame/${el.id}`}>
                <img src={el.image} className='discounts__card__img'/>
                </Link>
                <div className='discounts__card__title'>
                        <h4 className='discounts__card__h4'>{el.prise} <span className='span1'>-15%</span> <span className='span2'>16 400 P</span> </h4>
                        <h3 className='discounts__card__h3'>{el.name}</h3>
                        <div class="discounts__card__checkbox">
                            <input type="checkbox" class="custom-checkbox" id="happy" name="happy" value="yes"/>
                            <label for="happy" class="check__p">Ключ</label>
                           <input type="checkbox" class="custom-checkbox" id="happy" name="happy" value="yes"/>
                           <label for="happy" class="check__p">Аккаунт Steam</label>
                            </div>
                            </div> 
              </div>
              )}
            </div>
        </div>
    </section>
  )
}

export default Discounts
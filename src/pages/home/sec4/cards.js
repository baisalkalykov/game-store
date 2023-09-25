import React, { useContext } from 'react'
import { CustomContext } from '../../../context'
import { Link } from 'react-router-dom'
import './cards.scss'
import {animateScroll} from "react-scroll";
const Cards = () => {
  const{game,getBasket,basket,setLocal, deleteBasket}= useContext(CustomContext);

    const toTop = () => {
      animateScroll.scrollToTop({
          delay: 0,
          duration: 0
      })
  };
  return (
    <section className='cards'>
        <div className='cards__container container'>
           
            <div className='cards__box'>
              {game.slice(0,12).map((el)=>
              <div className='cards__box__card'>
                  <Link onClick={()=>toTop()} to={`onegame/${el.id}`}>
                <img src={el.image} className='cards__box__card__img'/>
                </Link>
                <div className='game__card__title'>
                        <h4 className='cards__box__card__h4'>{el.prise} <span className='span1'>-15%</span> <span className='span2'>16 400 P</span> </h4>
                        <h3 className='cards__box__card__h3'>{el.name}</h3>
                       
                            </div> 
                            {basket.find (item=>el.id===item.id)?  <button className='cards__box__card__btn__del' onClick={()=> deleteBasket(el.id)}>удалить</button> : <button  onClick={()=>getBasket(el)}  type='button'  className='cards__box__card__btn' >В корзину</button>
                                    }    
              </div>
              )}
            </div>
            <div className='cards__katolog'>
              <Link to='/goods' className='cards__link'>
              <p className='cards__katolog__p'>Перейти в каталог</p>
              </Link>
              
            </div>
        </div>
    </section>
  )
}

export default Cards
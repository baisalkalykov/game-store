import React, { useContext } from 'react'
import { CustomContext } from '../../../context'
import top4 from '../../image/top4.svg'
import './game.scss'
import { Link } from 'react-router-dom'
import {animateScroll} from "react-scroll";
import top from '../../layout/icons/Наверх.png'
const Game = () => {
    const{game,getBasket,basket,setLocal, deleteBasket}= useContext(CustomContext);
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
  return (
    <section className='game'>
        <div className='game__container container'>
            <div className='game__top__logo'>
             <p className='game__top__p'>Топ 4</p>
             <img src={top4} />
            </div>
            <div className='game__cards'>
                {game.slice(0,4).map((el)=>
                    <div className='game__card'>
                        <Link onClick={()=>toTop()} to={`onegame/${el.id}`}>
                        <img src={el.image} className='game__card__img'/>
                        </Link>
                        <div className='game__card__title'>
                        <h4 className='game__card__h4'>{el.prise} <span className='span1'>-15%</span> <span className='span2'>16 400 P</span> </h4>
                        <h3 className='game__card__h3'>{el.name}</h3>
                        <div class="game__card__checkbox">
                            <input type="checkbox" class="custom-checkbox" id="happy" name="happy" value="yes"/>
                            <label for="happy" class="check__p">Буст</label>
                           <input type="checkbox" class="custom-checkbox" id="happy" name="happy" value="yes"/>
                           <label for="happy" class="check__p">Origin</label>
                            </div>
                            </div> 
                            <div className='card__top4'>
                                <p className='card__top4__p'>Топ 4</p>
                                <img src={top4} />
                                </div>
                                {basket.find (item=>el.id===item.id)?  <button className='game__card__btn__del' onClick={()=> deleteBasket(el.id)}>удалить</button> : <button  onClick={()=>getBasket(el)}  type='button'  className='game__card__btn' >В корзину</button>
                                    }    
                        </div>
                )}
            </div>

        </div>
        <img className='totop' onClick={()=>toTop()} src={top} alt=""/>
    </section>
  )
}

export default Game
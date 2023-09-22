import React, { useContext, useEffect, useState } from 'react'
import { CustomContext } from '../context'
import axios from 'axios'
import './goods.scss'
import {animateScroll} from "react-scroll";

const Goods = () => {
  const [game,setGame] = useState([])
  const [input,setInput] = useState('')

  useEffect (()=>{
    axios('http://localhost:8080/game')
    .then(({data})=>setGame(data))
},[])
console.log(game.map((el)=>(
  el.name.toLowerCase().includes(input.toLowerCase())
)));
const{getBasket,basket, deleteBasket}= useContext(CustomContext);
const toTop = () => {
  animateScroll.scrollToTop({
      delay: 0,
      duration: 0
  })
};

   
  return (
    <section className='goods'>
     <div className='goods__container container'>
     <input className='goods__input' placeholder='Поиск' onChange={(e)=>setInput(e.target.value)}/>  
        <div className='goods__box'>              
          {game.filter((el)=>(
                  el.name.toLowerCase().includes(input.toLowerCase())
                )).map((el)=>(
                  <div className='goods__card'>
                    <div className='goods__img'>
                    <img src={el.image} className='goods__card__img'/>
                    </div>
                    <div className='goods__card__title'>
                   <h2 className='goods__card__h2'>{el.name}</h2>
                   <h3 className='goods__card__h3'>Цена:{el.prise}</h3>
                   {basket.find (item=>el.id===item.id)?  <button className='goods__btn__del' onClick={()=> deleteBasket(el.id)}>удалить</button> : <button  onClick={()=>getBasket(el)}  type='button'  className='goods__btn' >В корзину</button>
                                    } 
                     </div>
                  </div>
                  ))
              }
                
                
        </div>
     </div>
    </section>
  )
}

export default Goods
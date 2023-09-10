import React, { useContext, useEffect, useState } from 'react'
import { CustomContext } from '../../context'
import axios from 'axios'
import './goods.scss'


const Goods = () => {
  const [game,setGame] = useState([])
  const [input,setInput] = useState('')

  useEffect (()=>{
    axios('http://localhost:8080/game')
    .then(({data})=>setGame(data))
},[])
console.log(game.map((el)=>(
  el.name
)));

   
  return (
    <section className='goods'>
     <div className='goods__container container'>
        <div className='goods__box'>
              <input className='goods__input' placeholder='Поиск' onChange={(e)=>setInput(e.target.value)}/>   
        <h1>qwerty</h1>
        {}
                {game.filter((el)=>(
                  el.name.toLowerCase().split('').includes(input.toLowerCase())
                ))
                .map((el)=>(
                <div className='goods__card'>
                <img src={el.image} className='goods__card__img'/>
                 <h2>{el.name}</h2>
                </div>
                ))}
                
                
        </div>
     </div>
    </section>
  )
}

export default Goods
import React from 'react'
import { useEffect,useState } from "react";
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './oneGame.scss'
import serd from '../layout/icons/serd.svg'
const OneGame = () => {
  const {id}=useParams()
  const [one,oneGame]= useState([])
    useEffect (()=>{
        axios(` http://localhost:8080/game/${id}`)
        .then(({data})=>oneGame(data))
    },[])
  return (
    <section className='oneGame'>
        <div className='oneGame__container container'>
          <div className='oneGame__box'>
          <img src={`../../${one.image === undefined ?'': one.image}`} className='oneGame__img' alt=""/>
          <div className='oneGame__title'>
            <h2 className='oneGame__title__h2'>Купить Squad</h2>
            <p className='oneGame__title__p'>В наличии</p>
             <h4 className='oneGame__title__h4'>{one.prise}<span className='span1'>-15%</span> <span className='span2'>16 400 P</span> </h4>
             <div className='oneGame__btns'>
              <button className='oneGame__btn1'>Купить</button>
              <button className='oneGame__btn2'>В корзину</button>
              <div className='oneGame__btns__icon'>
                <img src={serd} className='oneGame__btns__i'/>
              </div>
             </div>
             <div className='oneGame__uls'>
              <ul className='oneGame__ul'>
                <li className='oneGame__ul__li__one'>Жанр</li>
                <li className='oneGame__ul__li__two'>{one.genre}</li>
              </ul>
              <ul className='oneGame__ul'>
                <li className='oneGame__ul__li__one'>Платформа</li>
                <li className='oneGame__ul__li__two'>{one.platform}</li>
              </ul>
              <ul className='oneGame__ul'>
                <li className='oneGame__ul__li__one'>Регион активации</li>
                <li className='oneGame__ul__li__two'>Страны СНГ</li>
              </ul>
              <ul className='oneGame__ul'>
                <li className='oneGame__ul__li__one'>Тип товара</li>
                <li className='oneGame__ul__li__two'>Учетная запись</li>
              </ul>
             </div>
             <div className='oneGame__dos'>

             </div>
          </div>
          </div>
        </div>
    </section>
  )
}

export default OneGame
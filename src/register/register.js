
import { Link } from 'react-router-dom'
import img from './register-img/reg-img.png'
import email from './register-img/email.svg'
import pas from './register-img/pasword.svg'
import './register.scss'
import {createContext, useContext, useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import { CustomContext } from '../context'

const Register = () => {
    const navigate = useNavigate()
    const {setUser} = useContext(CustomContext)
  
    const handleSubmit = (e) => {
        e.preventDefault();

      let userCreate = {
       
        email:e.target[0].value,
        password:e.target[1].value
      }
    axios.post('http://localhost:8080/login', userCreate)
    .then(({data})=>{setUser({
      token:data.accessToken,
      ...data.user
    })
    localStorage.setItem('user',JSON.stringify({
      token:data.accessToken,
      ...data.user
    }))
    navigate('/home')
  })
       
      
      };

  //start userContent


 
  return (
    <section className='register'>
        <div className='register__container container'>
         <div className='register__box'>
            <form className='register__form'  onSubmit={handleSubmit}>
                <h1 className='register__form__h1'>Войти</h1>
                <div className='register__form__in'>
                    <img src={email} className='fegister_svg'/>
                    <input type='text' placeholder='Напишите свой email' className='register__input'/>
                </div>
                <div className='register__form__in'>
                    <img src={pas} className='fegister_svg'/>
                    <input type='password' placeholder='Напишите свой пароль' className='register__input'/>
                </div>
                <Link to='/register' className='register__link'>
                <h2 className='register__h2'>Зарегистрироваться</h2>
                </Link>
                <button className='register__btn'>Войти</button>
            </form>
            <img src={img} className='register__img'/>
         </div>
        </div>
    </section>
  )
}

export default Register
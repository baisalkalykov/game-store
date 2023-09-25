
import img from '../register/register-img/reg-img.png'
import email from '../register/register-img/email.svg'
import pas from '../register/register-img/pasword.svg'
import icon from '../register/register-img/user-icon.svg'

import './addUser.scss'

import React, { useContext, useState } from 'react';
import axios from 'axios'
import { CustomContext } from '../context'
import { useNavigate } from 'react-router-dom'


const AddUser = () => {
    const {user,setUser}= useContext(CustomContext)
     const navigate= useNavigate()

      const handleSubmit = (e) => {
        e.preventDefault();

      let userCreate = {
       
        email:e.target[1].value,
        password:e.target[2].value
      }
    axios.post('http://localhost:8080/register', userCreate)
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
    
      return (
        <section className='addUser'>
        <div className='addUser__container container' >
          <div className='addUser__div'>
        <div className='addUser__box'>
          <h2 className='addUser__title__h2'>Регистрация пользователя</h2>
          <form onSubmit={handleSubmit} className='addUser__form' >
            <div className='addUser__title__inputs'>
            <img src={icon} className='addUser__icon'/>
              <input className='addUser__input'
              placeholder='Имя пользователя'
                type="text"
                id="username"
                name="username"
               
              />
            </div>
            <div className='addUser__title__inputs'>
            <img src={email} className='addUser__icon'/>
              <input className='addUser__input'
                placeholder='Email'
                type="email"
                id="email"
                name="email"
                
              />
            </div>
            <div className='addUser__title__inputs'>
            <img src={pas} className='addUser__icon'/>
              <input className='addUser__input'
              placeholder='Пароль'
                type="password"
                id="password"
                name="password"
              
              />
            </div>
            <div className='addUser__btns'>
            <button onClick={()=>navigate('/login')} className='addUser__btn2' >есть аккаунт</button>
            <button type="submit" className='addUser__btn'>Зарегистрироваться</button>
            </div>
            
          </form>
          </div>
          <img src={img} className='AddUser__img'/>
          </div>
        </div>
        </section>
      );
    }
    

export default AddUser
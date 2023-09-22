import React from 'react'
import img1 from './cont-img/img1.png'
import icon from './cont-img/icon1.svg'
import './contacts.scss'
const Contacts = () => {
  return (
    <section className='contacts'>
         <div className='contacts__container container'>
            <div className='contacts__title'>
                <h1 className='contacts__title__h1'>Контакты и поддержка</h1>
                <img src={img1} className='contacts__title__img'/>
            </div>
            <div className='contacts__box'>
                <div className='contacts__tex'>
                 <div className='contacts__tex__des'>
                    <p className='contacts__tex__des__p'>Техническая поддержка</p>
                    <h2 className='contacts__tex__des__h2'>Support.Gmail.com</h2>
                 </div>
                 <img src={icon} className='contacts__tex__icon'/>
               </div>

               <div className='contacts__tex'>
                 <div className='contacts__tex__des'>
                    <p className='contacts__tex__des__p'>Техническая поддержка</p>
                    <h2 className='contacts__tex__des__h2'>Support.Gmail.com</h2>
                 </div>
                 <img src={icon} className='contacts__tex__icon'/>
               </div>
            </div>  

            <div className='contacts__div__des'>
                <h1 className='contacts__div__des__h1'>FAQ</h1>
                <div className='contacts__div__des__text'>
                    <h3 className='contacts__des__text__h3'>Как купить игру, если нет денег?</h3>
                    <p className='contacts__des__text__p'>На одной раздаче - один победитель и один приз. Одна раздача игры длится 24 часа. Начало новой раздачи steam игр в  <br/>
                     19:00 по Москве. Конкурс ежедневный - шансы выиграть есть у каждого! Победитель выбирается случайно нашим ботом, <br/>
                      который честен и непредвзят в любое время года. Бота нельзя подкупить, договориться с ним или понравиться ему.</p>
                </div>
            </div>
            
         </div>
    </section>
  )
}

export default Contacts
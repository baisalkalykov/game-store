import React, { useContext, useState } from 'react'
import { CustomContext } from '../../context';
import bitcoin from './basket-icon/Bitcoin_logo.svg'
import ethereum from './basket-icon/ethereum-logo.svg'
import qwi from './basket-icon/Logo_qiwi.svg'
import mastercard from './basket-icon/mastercard.svg'
import mir from './basket-icon/Mir-logo.svg'
import samsung from './basket-icon/Samsung_Pay_icon.svg'
import visa from './basket-icon/Visa_Inc._logo.svg'
import webmoney from './basket-icon/WebMoney_logo.svg'
import './basket.scss'
const Basket = () => {
const{basket}= useContext(CustomContext)
const [checked, setChecked] = useState(true);
console.log(basket.reduce((acc,rec)=>{
  return acc + +rec.prise

},0));
const{ deleteBasket}= useContext(CustomContext);
  return (
    <section className='basket'>
        <div className='basket__container container'>
        <h1 className='basket__h1'>Корзина </h1>
          <div className='basket__count'>
            <p className='basket__count__p'> <span className='count__p__span'>  {basket.length}</span> товаров</p>
            <h2 className='basket__count__h2'> {basket.reduce((acc,rec)=>(
              acc + +rec.prise
            ),0)}</h2>
            <button className='basket__count__btn'>Оформить заказ</button>
            <div className='basket__count__checkbox'>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
               <span>{checked ? 'галочка есть' : 'галочки нет'}</span>
               <p className='basket__count__checkbox__p'>Покупая данный товар, я подтверждаю,что ознакомился и согласен с <span className='checkbox__p__span'> условиями и условия магазина</span> </p>
               </div>
            </div>
            <div className='basket__box'>
            {basket.map((el)=>
              <div className='basket__card'>
                           
                 <img src={el.image} className='basket__card__img'/>
                 <div className='basket__title'>
                 <h4 className='basket__card__h4'>{el.prise} <span className='span1'>-15%</span> <span className='span2'>16 400 P</span> </h4>
                        <h3 className='basket__card__h3'>{el.name}</h3>
                        <p className='basket__card__p'>Сервис активации  <span className='card__p__span' >Steam</span></p>
                         <button className='basket__btn' onClick={()=> deleteBasket(el.id)}>удалить</button>
                 </div>
                 </div>
                )}
              
            </div>
            <div className='basket__price'>
              <div className='basket__price__card'>
                <div className='basket__price__card__checkbox'>
                <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} className='basket__price__card__check' />
                <h2 className='basket__price__card__h3'>Эллектронные кошельки</h2>
                </div>
                <div className='basket__price__card__icon'>
                <img src={webmoney} className='basket__price__card__svg'/>
                    <img src={qwi} className='basket__price__card__svg'/>
                </div>
                   
              </div>
            
          
              <div className='basket__price__card'>
                <div className='basket__price__card__checkbox'>
                <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} className='basket__price__card__check' />
                <h2 className='basket__price__card__h3'>Банковские карты</h2>
                </div>
                <div className='basket__price__card__icon'>
                <img src={mastercard} className='basket__price__card__svg'/>
                    <img src={visa} className='basket__price__card__svg'/>
                    <img src={mir} className='basket__price__card__svg' />
                </div>
                   
              </div>
            
            
              <div className='basket__price__card'>
                <div className='basket__price__card__checkbox'>
                <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} className='basket__price__card__check' />
                <h2 className='basket__price__card__h3'>Криптовалюта</h2>
                </div>
                <div className='basket__price__card__icon'>
                <img src={ethereum} className='basket__price__card__svg'/>
                <img src={bitcoin} className='basket__price__card__svg'/>
                </div>
                   
              
            </div>
              <div className='basket__price__card'>
                <div className='basket__price__card__checkbox'>
                <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} className='basket__price__card__check' />
                <h2 className='basket__price__card__h3'>Samsung pay</h2>
                </div>
                <div className='basket__price__card__icon'>
                <img src={samsung} className='basket__price__card__svg'/>
                </div>
                   
              </div>
            </div>
        </div>
    </section>
  )
}

export default Basket
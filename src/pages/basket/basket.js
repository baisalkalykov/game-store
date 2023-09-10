import React, { useContext, useState } from 'react'
import { CustomContext } from '../../context';
import './basket.scss'
const Basket = () => {
const{basket}= useContext(CustomContext)
const [checked, setChecked] = useState(true);
console.log(basket.reduce((acc,rec)=>{
  return acc + +rec.prise

},0));
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
                        
                 </div>
                 </div>
                )}
              
            </div>
        </div>
    </section>
  )
}

export default Basket
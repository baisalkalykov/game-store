import React from 'react'
import icon from '../layout/icons/basket.svg'
import './basketZero.scss'
const BasketZero = () => {
  return (
    <section className='basketZero'>
        <div className='basketZero__blosk'>
          <img src={icon} className='basketZero__icon'/>
          <h2 className='basketZero__h2'>Корзина пустая</h2>
        </div>
    </section>
  )
}

export default BasketZero
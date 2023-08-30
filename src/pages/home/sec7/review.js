import React from 'react'
import stars from '../../image/stars.png'
import str from '../../image/srt.png'
import './review.scss'
const Review = () => {
  return (
    <section className='review'>
        <div className='review__container container'>
            <div className='review__title'>
             <p className='review__title__p'>Отзывы</p>   
             <button className='review__title__btn'>Оставить отзыв</button>
            </div>
            <div className='review__cards'>
              <div className='review__card__one'>
                <h2 className='review__card__h2'>Excellent</h2>
                <img src={stars} className='review__card__img'/>
                <p className='review__card__one__p'>Based on 25,806 reviews</p>
                <img src={str} className='review__card__str'/>
              </div>
              <div className='review__card'>
                <div className='review__card__img'>
                  <img src={stars} className='star'/>
                  <p className='review__card__p1'>7 days ago</p>
                </div>
                <p className='review__card__p__nam'>Cheap keys exist</p>
                <p className='review__card__pl'>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Etiam</p>
                <p className='review__card__p1'> eLiteeo</p>
                <p className='review__card__p__nam'>Showing out 4 & 5 stars reviews</p>
              </div>
              <div className='review__card'>
                <div className='review__card__img'>
                  <img src={stars} className='star'/>
                  <p className='review__card__p1'>7 days ago</p>
                </div>
                <p className='review__card__p__nam'>Cheap keys exist</p>
                <p className='review__card__pl'>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Etiam</p>
                <p className='review__card__p1'> eLiteeo</p>
                <p className='review__card__p__nam'>Showing out 4 & 5 stars reviews</p>
              </div>
              <div className='review__card'>
                <div className='review__card__img'>
                  <img src={stars} className='star'/>
                  <p className='review__card__p1'>7 days ago</p>
                </div>
                <p className='review__card__p__nam'>Cheap keys exist</p>
                <p className='review__card__pl'>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Etiam</p>
                <p className='review__card__p1'> eLiteeo</p>
                <p className='review__card__p__nam'>Showing out 4 & 5 stars reviews</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Review
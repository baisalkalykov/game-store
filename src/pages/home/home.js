import React from 'react'
import './home.scss'
import Sec1 from './sec1/sec1'
import Game from './sec2/game'
import MinCards from './sec3/min-cards'
import Cards from './sec4/cards'
import Discounts from './sec5/discounts' 
import Advertising from './sec6/advertising'
import Review from './sec7/review'
const Home = () => {
  return (
    <>
    <Sec1/>
    <Game/>
    <MinCards/>
    <Cards/>
    <Discounts/>
    <Advertising/>
    <Review/>
    </>
  )
}

export default Home
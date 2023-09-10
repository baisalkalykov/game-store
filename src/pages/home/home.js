import React, { useContext,useEffect } from 'react'
import './home.scss'
import axios from 'axios'
import Sec1 from './sec1/sec1'
import Game from './sec2/game'
import MinCards from './sec3/min-cards'
import Cards from './sec4/cards'
import Discounts from './sec5/discounts' 
import Review from './sec7/review'
import { CustomContext } from '../../context'
const Home = () => {
  const {game,setGame} = useContext(CustomContext)

  useEffect (()=>{
    axios('http://localhost:8080/game')
    .then(({data})=>setGame(data))
},[])
  return (
    <>
    <Sec1/>
    <Game/>
    <MinCards/>
    <Cards/>
    <Discounts/>
    <Review/>
    </>
  )
}

export default Home
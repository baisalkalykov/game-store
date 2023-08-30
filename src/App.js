import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from './pages/layout/layout'
import Home from './pages/home/home'
import OneGame from '../src/pages/oneGame/oneGame'
import Search from './pages/search/search'
import Basket from './pages/basket/basket'
const App = () => {


  return (
    <Routes>
    <Route path={'/'} element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path={'onegame/:id'} element={<OneGame/>} />
      {/* <Route path='search' element={<Search/>}/> */}
      <Route path='/basket' element={<Basket/>}/>
    </Route>
    
</Routes>
  )
}

export default App

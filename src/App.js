import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from './pages/layout/layout'
import Home from './pages/home/home'
import OneGame from '../src/pages/oneGame/oneGame'
import Basket from './pages/basket/basket'
import Goods from './goods/goods'
import Reviews from './review/reviews'
import Garant from './guarantees/garant'
import Contacts from './Contacts/сontacts'
import Register from './register/register'
import AddUser from './addUser/addUser'
const App = () => {


  return (
    <Routes>
    <Route path={'/'} element={<Layout/>}>
      <Route path='home' element={<Home/>} />
      <Route path={'onegame/:id'} element={<OneGame/>} />
      <Route path='/basket' element={<Basket/>}/>
      <Route path={'/goods'} element={<Goods/>} />
      <Route path={'/reviews'} element={<Reviews/>}/>
      <Route path={'/garant'} element={<Garant/>}/>
      <Route path={'/contacts'} element={<Contacts/>}/>
    </Route>
    <Route path='/login' element={<Register/>}/>
    <Route path='/register' element={<AddUser/>}/>
    
</Routes>
  )
}

export default App

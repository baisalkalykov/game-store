import { createContext,useEffect,useState } from "react";
import axios from "axios";
export const CustomContext=createContext()
export const Context=(props)=>{
  const [game,setGame]= useState([])
  const [basket,setBasket]= useState([])
  const addBasket=(game)=>{
    setBasket(prev=>[...prev],{game})
  }
    useEffect (()=>{
        axios(' http://localhost:3000/game')
        .then(({data})=>setGame(data))
    },[])
    
    const value={
      game,
      setGame,
      basket,
      setBasket,
      

    }
    
    return <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
}
import { createContext,useEffect,useState } from "react";
import axios from "axios";
export const CustomContext=createContext()
export const Context=(props)=>{

  const [game,setGame]= useState([])
  const [basket,setBasket]= useState([])

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('basket'));
    if (item) {
     setBasket(item);
    }
  }, []);

  const saveBasket = (dataBasket) => {
    setBasket(dataBasket)
    localStorage.setItem('basket',JSON.stringify(dataBasket))
  }
   
    let getBasket = (item)=>{
      const newBasket = [...basket,item]
      saveBasket(newBasket)
    }
  
    const deleteBasket = (id) => {
      const filteredBasket = basket.filter(item => item.id !== id)
      saveBasket(filteredBasket)
    };

    const value={
      game,
      setGame,
      basket,
      setBasket,
      getBasket,
      deleteBasket

    }
    
    return <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
}
import { createContext,useEffect,useState } from "react";
export const CustomContext=createContext()
export const Context=(props)=>{

  const [game,setGame]= useState([])
  const [basket,setBasket]= useState([])
  const [user,setUser]= useState({
    email:''
  })
  useEffect(()=>{
    if(localStorage.getItem('user')!==null){
       setUser(JSON.parse(localStorage.getItem('user')))
    }
  },[])

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
      deleteBasket,
      user,
      setUser

    }
    
    return <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
}
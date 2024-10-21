import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import {getItemCart, setItemCart} from "../utilities/utility"



const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(()=>{
      const fetchData =async()=>{
        const res = await fetch("./bottles.json");
        const data = await res.json();
        setBottles(data);
      }
      fetchData();

    },[]);

    useEffect(()=>{
     
      let saveCart = []
       if(bottles.length>0){
        const storedCart = getItemCart()
        storedCart.map(id=>{
          const eachCart = bottles.find((item=> item.id));
          saveCart.push(eachCart)
        } )
       }
     setCart(saveCart)
    },[bottles])
    
    const cartbtnHandellar =(bottle)=>{
        setCart([...cart, bottle]);
        setItemCart(bottle.id)
       
    }

    return (
        <div className="container mx-auto">
          <div className="p-4">
            <h1 className="text-center mb-6 text-4xl font-bold">Memeroble-Bottles</h1>
            <h3 className="text-2xl text-gray-500">Total Bottle: {bottles.length}</h3>
            <h3 className="text-2xl text-gray-500">Cart-Item: {cart.length}</h3>
            
          </div>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {bottles.map(bottle=> <Bottle cartbtnHandellar={cartbtnHandellar} key={bottle.id} bottle={bottle} ></Bottle>)}
          </div>
        </div>
    );
};

export default Bottles;
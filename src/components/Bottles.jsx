import { useEffect, useState } from "react";
import Bottle from "./Bottle";


const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    useEffect(()=>{
      const fetchData =async()=>{
        const res = await fetch("./bottles.json");
        const data = await res.json();
        setBottles(data);
      }
      fetchData();

    },[])
    
    console.log(bottles)

    return (
        <div className="container mx-auto">
          <div className="p-4">
            <h1 className="text-center mb-6 text-4xl font-bold">Memeroble-Bottles</h1>
            <h3 className="text-2xl text-gray-500">Total Bottle: {bottles.length}</h3>
          </div>
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
            {bottles.map(bottle=> <Bottle key={bottle.id} bottle={bottle} ></Bottle>)}
          </div>
        </div>
    );
};

export default Bottles;
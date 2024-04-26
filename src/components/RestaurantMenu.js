import { useState,useEffect } from "react";
import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState(null); //ill ask narpat if we put [] 
    const [menuInfo,setMenuInfo] = useState(null)

    const {ResId} = useParams()
    // console.log(ResId = useParams())

console.log(resInfo)
  useEffect(() => {
    fetchMenu();
  },[]);


  const fetchMenu = async () => {

    const data = await fetch(
        
MENU_API+ResId

    );

    const json = await data.json()
    // console.log(json?.data?.cards[2]?.card?.card?.info.name)

    setResInfo(json?.data?.cards[2]?.card?.card?.info)

    setMenuInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);


    // setMenuInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card)
      
  }

    if(resInfo === null) return <ShimmerCard/>

// console.log(menuInfo)

  const {name,costForTwoMessage,cuisines} = resInfo;

  const {itemCards} = menuInfo;




  

  
   return (
    <div className="menu">
    <h1>{name}</h1>  
    <h3>{cuisines?.join(',')}</h3>
    <h3>{costForTwoMessage}</h3>
    
    <ul>
        {itemCards.map((item,id) => (
        <li key={id}>{item.card.info.name} - {item.card.info.price/100}</li>) )}
       
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
);
};

  
  
export default RestaurantMenu;
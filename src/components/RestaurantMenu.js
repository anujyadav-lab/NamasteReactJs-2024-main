import { useState,useEffect } from "react";
import ShimmerCard from "./ShimmerCard";

const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState([]);
    const [menuInfo,setMenuInfo] = useState([])

  useEffect(() => {
    fetchMenu();
  }, []); //explain why used empty array.


  const fetchMenu = async () => {

    const data = await fetch(
        
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=496036&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"

    );

    const json = await data.json()
    // console.log(json?.data?.cards[2]?.card?.card?.info.name)

    setResInfo(json?.data?.cards[2]?.card?.card?.info)

    setMenuInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card)
      
  };
    if(resInfo === null) return <ShimmerCard/>

// console.log(menuInfo)

  const {name,costForTwoMessage,cuisines,} = resInfo;

//   const{itemCards} = menuInfo;

  

  
   return (
    <div className="menu">
    <h1>{name}</h1>  
    <h3>{cuisines?.join(',')}</h3>
    <h3>{costForTwoMessage}</h3>
    
    <ul>
       
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
);
};

  
  
export default RestaurantMenu;
import { API_MAIN } from "./constants";
import { useState,useEffect } from "react";
const useFilteredRes = () =>{

    const [restaurantList, setRestaurantList] = useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  
    const [searchText, setSearchText] = useState("");
  
    useEffect(() => {
        fetchData();
      }, []);
    
       const fetchData = async () => {
        const data = await fetch(
         API_MAIN
        );
    
        const json = await data.json();
    
        setRestaurantList(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    
        setFilteredRestaurant(
          json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        );
    
    
   
      };
        const handleFilter = () => {
        const filteredList = restaurantList.filter(
          (restaurant) => restaurant?.info.avgRating > 4.0
        );
        setFilteredRestaurant(filteredList);
      };
    
  
     
        const handleSearch = () => {
        const filteredRes = restaurantList.filter((res) =>
          res?.info.name.toLowerCase().includes(searchText.toLowerCase())
        );

        // console.log(searchText)
        setFilteredRestaurant(filteredRes);
      };
    
return {restaurantList,filteredRestaurant,searchText ,handleFilter,handleSearch,setSearchText}

}

export default useFilteredRes;
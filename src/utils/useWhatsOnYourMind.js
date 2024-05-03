import { useState,useEffect } from "react";
import { API_MAIN} from "./constants";

const useWhatsOnYourMind = ()=>{

    const [dish, setDish] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const data = await fetch(
        API_MAIN
      );
  
      const json = await data.json();
      setDish(json?.data?.cards[0]?.card?.card?.imageGridCards?.info); 
    }; 
  
return dish;

}

export default useWhatsOnYourMind;
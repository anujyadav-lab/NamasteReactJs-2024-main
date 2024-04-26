import { useEffect, useState } from "react";
import { API_MAIN, IMGG_URL } from "../utils/constants";


const WhatsOnYourMind = () => {
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
  }; //i can import this from body itself.ill try today.

  return (
    <>
      <h2>What's on your mind?</h2>
{console.log(dish.imageId)}
      <div className="dishContainer">
      {console.log(dish.imageId)}

        {dish.map((res) => (
          <img  alt="error" key={res?.id} src={IMGG_URL + res?.imageId} />
        ))}
      </div>
    </>
  );
};

export default WhatsOnYourMind;

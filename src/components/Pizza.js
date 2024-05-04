import CDN_URL, { WHATS_ON_YOUR_MIND_API } from "../utils/constants";
import { useEffect, useState } from "react";

const Pizza = () => {
    // Initialize pizzaState with default values for properties
    const [pizzaState, setPizzaState] = useState({
        name: '',
        cloudinaryImageId: '',
        avgRating: null,
        cuisines: [],
        costForTwo: null,
        areaName: '',
    });
const [pizzaInfo,setPizzaInfo]  = useState({
    title:'',
    description:'',
})
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(WHATS_ON_YOUR_MIND_API);
            if (response.ok) {
                const json = await response.json();
                const info = json?.data?.cards?.[3]?.card?.card?.info;
                 const info2 = json?.data?.cards[0]?.card?.card;
                if (info) {
                    setPizzaState(info);
                }

                if(info2){
                    setPizzaInfo(info2)
                }
            }
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    // Destructure with default values
    const {
        name = '',
        cloudinaryImageId = '',
        avgRating = null,
        cuisines = [],
        costForTwo = null,
        areaName = ''
    } = pizzaState;

    const {
        title = '',
        description = ''
    } = pizzaInfo;

    return (
        <>
        <h1>{title}</h1>
        <p>{description}</p>

        
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="cardImg" src={CDN_URL + cloudinaryImageId} alt={name} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>avgRating: {avgRating}</h4>
            <h4>Cost for Two: {costForTwo}</h4>
            <h4>Area Name: {areaName}</h4>
        </div>
        </>
    );
};

export default Pizza;

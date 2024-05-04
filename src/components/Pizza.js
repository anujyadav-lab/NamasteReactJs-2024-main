import CDN_URL, { WHATS_ON_YOUR_MIND_API } from "../utils/constants";
import { useEffect, useState } from "react";

const Pizza = () => {
    // Initialize pizzaState as an empty array
    const [pizzaState, setPizzaState] = useState([]);
    // Initialize pizzaInfo with default values for title and description
    const [pizzaInfo, setPizzaInfo] = useState({
        title: '',
        description: '',
    });

    // Use useEffect to fetch data once on component mount
    useEffect(() => {
        fetchData();
    }, []);

    // Function to fetch data from the API
    const fetchData = async () => {
        try {
            const response = await fetch(WHATS_ON_YOUR_MIND_API);
            if (response.ok) {
                const json = await response.json();

                // Extract pizza objects from data.cards array
                const pizzaArray = json?.data?.cards?.map(card => card.card?.card?.info).filter(info => info) || [];

                // Update pizzaState with an array of pizza objects
                setPizzaState(pizzaArray);

                // Fetch title and description info from the first card
                const info2 = json?.data?.cards?.[0]?.card?.card;
                if (info2) {
                    setPizzaInfo(info2);
                }
            } else {
                console.error('Failed to fetch data: HTTP response not ok');
            }
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    // Destructure title and description from pizzaInfo
    const { title = '', description = '' } = pizzaInfo;

    return (
        <>
            {/* Render the title and description */}
            <h1>{title}</h1>
            <p>{description}</p>

            {/* Map through pizzaState array to render each pizza card */}
            {pizzaState.map((pizzaRes) => (
                <div key={pizzaRes.id} className="pizza-card" style={{ backgroundColor: "#f0f0f0" }}>
                    {/* Render pizza card image */}
                    <img className="pizzacardImg" src={CDN_URL + pizzaRes.cloudinaryImageId} alt={pizzaRes.name} />
                    
                    {/* Render pizza card details */}
                    <h3>{pizzaRes.name}</h3>
                    <h4>{pizzaRes.cuisines.join(", ")}</h4>
                    <h4>avgRating: {pizzaRes.avgRating}</h4>
                    <h4>Cost for Two: {pizzaRes.costForTwo}</h4>
                    <h4>Area Name: {pizzaRes.areaName}</h4>
                </div>
            ))}
        </>
    );
};

export default Pizza;

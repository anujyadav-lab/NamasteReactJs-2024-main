import { useEffect, useState } from 'react';
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const [menuInfo, setMenuInfo] = useState([]);

    console.log(menuInfo);

    // Dependency array includes `resId` to refetch data when `resId` changes
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(MENU_API + resId);
            const json = await data.json();

            setResInfo(json?.data?.cards[2]?.card?.card?.info);
            setMenuInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return { resInfo, menuInfo };
};

export default useRestaurantMenu;

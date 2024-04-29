import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";

const RestaurantMenu = () => {
  const { ResId } = useParams();
 
  const { resInfo, menuInfo } = useRestuarantMenu(ResId);

  if (resInfo === null) return <ShimmerCard />;

  const { name, costForTwoMessage, cuisines } = resInfo;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>

      <ul>
        {menuInfo.map((item, id) => (
          <li key={id}>
            {item.card.info.name} - {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

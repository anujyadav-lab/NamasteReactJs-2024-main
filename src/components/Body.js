import RestaurantCard from "./RestaurantCard";
import Card from "./ShimmerCard";
import { Link } from "react-router-dom";
import WhatsOnYourMind from "./WhatsOnYourMind";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFilteredRes from "../utils/useFilteredRes";

const Body = () => {

  const myfilteredRestuarant = useFilteredRes();

  const onlineStat = useOnlineStatus();
  // conditional rendering-> rendering on the basis of conditional rendering.
  if (onlineStat === false)
    return <h>Hey you are not connected to the internet.</h>;

  return myfilteredRestuarant.restaurantList.length === 0 ? (
    <>
      <Card />
    </>
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <input
            className="searchInput"
            type="text"
            value={myfilteredRestuarant.searchText}
            onChange={(e) =>myfilteredRestuarant.setSearchText(e.target.value)}
          />

          <button onClick={myfilteredRestuarant.handleSearch}>search</button>

          <button
            className="filter-btn"
            onClick={myfilteredRestuarant.handleFilter}
          >
            Top Rated Restaurant
          </button>
        </div>

        <div className="whatsonyourmind">
          <WhatsOnYourMind />
        </div>

        <div className="res-container">
          {myfilteredRestuarant.filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/resturant/" + restaurant?.info?.id}
            >
              <RestaurantCard resData={restaurant.info} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;

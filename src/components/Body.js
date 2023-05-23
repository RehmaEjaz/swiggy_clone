import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, listOfRestaurant) {
  const filterData = listOfRestaurant.filter((restaurant) =>
    restaurant.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState(""); //local state variable
  const [searchClick, setSearchClicked] = useState("true");

  useEffect(() => {
    //Api call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    
    //optional Chaining
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }
  //conditonal rendering
  //Early return not render component
  if (!allRestaurant) return null;
  //if (filteredRestaurant?.length == 0) return <h2>Restaurant not matches</h2>;
return allRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
        <div className="search">
            <input
              className="rounded"
              type="text"
              placeholder="search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="search-btn btn btn-dark text-white"
              onClick={() => {
                // searchClick == "true"
                //   ? setSearchClicked("false")
                //   : setSearchClicked("true");
                const data = filterData(searchText, allRestaurant);
                setFilteredRestaurant(data);
              }}
            >
              Search
            </button>
          </div>

          <div className="res-container mt-2">
            {filteredRestaurant.map((restaurant) => (
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            ))}
          </div>
        </div>
  );
};

export default Body;

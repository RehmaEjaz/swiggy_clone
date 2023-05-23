import {CDN_URL} from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    const{cloudinaryImageId,name,cuisines,costForTwo,avgRating,deliveryTime} =resData?.data//optional chaining(?)
    
    
    return(
      <div className="res-card" style={{
        backgroundColor:"#f0f0f0",
      }}>
        <img  alt="img" className="res-img" src={CDN_URL+cloudinaryImageId}/>
        <h5>{name}</h5>
        <p>{cuisines.join(",")}</p>
        <span>{avgRating} star</span>
        <span class="dtime">{deliveryTime} minutes</span>
  
      </div>
    );
  };
  export default RestaurantCard;
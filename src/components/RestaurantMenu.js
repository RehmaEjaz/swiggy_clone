import {useParams} from "react-router-dom";
import {useEffect } from "react";

// to read a dynamic url(id) use Params
const RestaurantMenu = () =>{
 const {resId} = useParams();

 useEffect(() =>{
    getRestaurantInfo();
 },[]);


 async function getRestaurantInfo(){
    const data =  await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=261077&submitAction=ENTER");
    const json =  await data.json();
    console.log(json.data);
 }
 return(
        <>
        <h1>Restaurant Id:{resId } </h1>
        <h2>Menu</h2>
        </>
    )
}
export default RestaurantMenu;
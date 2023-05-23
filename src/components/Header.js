import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import '../header.css';
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
          <Link to="/">
              Home
            </Link>
          </li>
          <li>
          <Link to="/about">

              About
              </Link>

          </li>
          <li>
            <Link to="/Contact">
              ContactUs
              </Link>          
              </li>
          <li>
          <i className=" listIcon fa-solid fa-cart-shopping"></i>          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button
        id="btn"onClick={() => setIsLoggedIn(false)}
        >
          LogOut
        </button>
      ) : (
        <button id="btn" onClick={() => setIsLoggedIn(true)}>
          LogIn
        </button>
      )}
    </div>
  );
};
export default Header;

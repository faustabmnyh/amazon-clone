import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../utils/StateProvider";
import { auth } from "../../utils/firebase";
import "./Header.css";

function Header() {
  const [{ basket, user, displayName }, dispatch] = useStateValue();

  console.log(displayName);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          {/* jadi ini mislnya gaada user misalnya pas logout lah maka dia gak akan pidah ke login page  */}
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hallo{" "}
              {user ? (displayName ? displayName : user?.email) : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />

            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
            {/* the reason of ? if any reason dont have the correct value or basket becomes undefined due to an error , it gracefully handle the error  */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

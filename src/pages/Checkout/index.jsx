import React from "react";
import Subtotal from "../../components/Subtotal";
import { useStateValue } from "../../utils/StateProvider";
import CheckoutProduct from "../../components/CheckoutProduct"
import "./Checkout.css";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/PayCode/FinalAssets/Desktop/English/AmazonExports_FIAT_OnSite_Concepts_R3_DesktopStripe_1500x120_v1.png"
          alt=""
        />
        <div>
          <h5>
            Hallo {user ? (user?.username ? user?.name : user?.email) : "Guest"}
          </h5>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              displayPrice={item.displayPrice}
              rating={item.rating}
              items={item.items}
              key={item.id}
            />
          ))}
        </div>
      </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
  </div>
  );
}

export default Checkout;

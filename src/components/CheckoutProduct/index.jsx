import React from "react";
import { useStateValue } from "../../utils/StateProvider";
import { Flipper, Flipped } from "react-flip-toolkit";
import "./CheckoutProduct.css";

function CheckoutProduct({
  id,
  image,
  title,
  displayPrice,
  rating,
  hideButton,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <Flipper flipKey={basket} spring="stiff">
      <Flipped flipId={dispatch}>
        <div className="checkoutProduct">
          <img src={image} className="checkoutProduct__image" alt=""/>

          <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
              <small>IDR</small>
              <strong>{displayPrice}</strong>
            </p>
            <div className="checkoutProduct__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>
            {!hideButton && (
              <button onClick={removeFromBasket}>Remove from Basket</button>
            )}
          </div>
        </div>
      </Flipped>
    </Flipper>
  );
}

export default CheckoutProduct;

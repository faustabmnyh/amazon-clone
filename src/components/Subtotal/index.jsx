import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../utils/StateProvider";
import { getBasketTotal } from "../../utils/reducer";
import { useHistory } from "react-router-dom";
import "./Subtotal.css";

function Subtotal() {
  const history = useHistory();
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
           Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"IDR"}
      />
      <button onClick={() => history.push("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

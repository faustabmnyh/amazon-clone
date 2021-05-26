import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "../../components/CheckoutProduct";
import { useStateValue } from "../../utils/StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../utils/reducer";
import axios from "../../utils/axios";
import { db } from "../../utils/firebase";
import "./Payment.css";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      // axios adalah membuat atau meminta post atau get
      const response = await axios.post(
       `/payments/create?total=${Math.round(
          getBasketTotal(basket) * 0.00006 * 100
        )}`,
      );
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);


  const handleSubmit = async (event) => {
    // do all fancy stripe
    event.preventDefault();
    setProcessing(true);
    //  client secret untuk stripe tau berapa kita membayarnya
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // semacam konfirmasi
        // jika semaunya berhasil

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        // kita gamau user ke page payment
        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    // listen for changes in the CardElements
    // and display any errors as the customer types their card details
    setDisabled(event.empty); // misalnya kosong bakal di disable tombolnya
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout ({<Link to="/checkout">{basket?.length} items)</Link>}</h1>

        {/* payment section - delivery addres */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Tanah Abang</p>
            <p>Grand Line</p>
          </div>
        </div>

        {/* payment section - review item */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                displayPrice={item.displayPrice}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* payment section - payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3 className="payment__orderTotal">Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"IDR"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
                <p className="payment__info">
                  Don't use your real account if you wanna try it, just use fake account like 4242!, and when you not use fake account and error occurs we not will cover it. <strong>DON'T USE YOUR REAL ACCOUNT!!</strong>
                </p>
              </div>
              {/* error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

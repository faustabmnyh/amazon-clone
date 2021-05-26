import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import "./Orders.css";
import { useStateValue } from "../../utils/StateProvider";
import Order from "../../components/Order";

function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1 className="orders__title">Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} key={order.id}/>
        ))}
      </div>
    </div>
  );
}

export default Orders;

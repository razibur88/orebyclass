import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";

const Checkout = () => {
  const db = getDatabase();
  let data = useSelector((state) => state.single.cartItem);
  let [datacheck, setDatacheck] = useState([]);
  useEffect(() => {
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        setDatacheck(item.val());
      });
    });
  }, []);

  const { totalPrice, totalQuantity } = data.reduce(
    (acc, item) => {
      acc.totalPrice += item.price * item.qun;
      acc.totalQuantity += item.qun;
      return acc;
    },
    { totalPrice: 0, totalQuantity: 0 }
  );
  return (
    <Container>
      <h2>{datacheck.username}</h2>
      <h2>{datacheck.email}</h2>
      <p>{totalPrice}</p>
      <p>{totalQuantity}</p>
    </Container>
  );
};

export default Checkout;

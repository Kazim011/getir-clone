import React from "react";
import CartComponent from "../Components/Cart/Cart";
import CartNavBar from "../Components/Cart/CartNavbar";
import Aksesuar from "../Components/Urunler/Aksesuar";

export default function Cart() {
  return (
    <div>
      <CartNavBar />
      <CartComponent />
    </div>
  );
}

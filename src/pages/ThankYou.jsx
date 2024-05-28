import React, { useEffect } from "react";
import { SectionTitle } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { store } from "../store";
import { calculateTotals, clearCart } from "../features/cart/cartSlice";

const ThankYou = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const { total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveToOrderHistory = async () => {
    try {
      const response = await axios.post("http://localhost:8080/orders", {
        userId: localStorage.getItem("id"),
        orderStatus: "в процессе",
        subtotal: total,
        cartItems: cartItems,
      });
    } catch (err) {
      toast.error(err.response);
    }
  };

  if (cartItems.length > 0) {
    saveToOrderHistory();
    store.dispatch(clearCart());
    store.dispatch(calculateTotals());
    toast.success("Заказ выполнен");
  }

  useEffect(() => {
    if (!loginState) {
      toast.error("Вы должны войти в систему, чтобы получить доступ к этой странице");
      navigate("/");
    }
  }, []);


  return (
    <>
      <SectionTitle title="Спасибо"  />
      <div className="thankyou-content text-center text-accent-content px-10 max-w-7xl mx-auto">
        <h2 className="text-6xl max-sm:text-4xl">
          Благодарим вас за вашу покупку!
        </h2>

        <h3 className="text-2xl mt-10 max-sm:text-xl">
          Мы надеемся, что вам понравится ваша новая одежда и обувь! Мы ценим ваш
          бизнес и с нетерпением ждем встречи с вами в ближайшее время.
        </h3>
        <h3 className="text-2xl mt-5 max-sm:text-xl">
          Вот несколько вещей, которые вы можете сделать дальше:
        </h3>
        <ul className="text-xl mt-5 text-blue-500 max-sm:text-lg">
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/order-history">&rarr; Смотрите историю заказов &larr;</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/">&rarr; Просматривайте больше товаров и покупайте больше &larr;</Link>
          </li>

        </ul>

        <h4 className="text-xl mt-5 max-sm:text-lg">
          Еще раз благодарим вас за покупку!
        </h4>
        <h4 className="text-xl max-sm:text-lg">
        С уважением, магазин Divine Clothes
        </h4>
      </div>
    </>
  );
};

export default ThankYou;

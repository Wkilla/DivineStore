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
      await axios.post("http://localhost:8080/orders", {
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
  }, [loginState, navigate]);

  return (
    <>
      <SectionTitle title="Спасибо" />
      <div className="thankyou-content text-center bg-gray-800 text-white p-10 rounded-lg shadow-md max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-500">
          Благодарим вас за вашу покупку!
        </h2>
        <p className="text-lg mt-5">
          Мы надеемся, что вам понравится ваша новая одежда и обувь! Мы ценим ваш бизнес и с нетерпением ждем встречи с вами в ближайшее время.
        </p>
        <p className="text-lg mt-5">
          Вот несколько вещей, которые вы можете сделать дальше:
        </p>
        <ul className="text-lg mt-5 text-blue-400">
          <li className="hover:text-blue-300 cursor-pointer">
            <Link to="/order-history">&rarr; Смотрите историю заказов &larr;</Link>
          </li>
          <li className="hover:text-blue-300 cursor-pointer">
            <Link to="/">&rarr; Просматривайте больше товаров и покупайте больше &larr;</Link>
          </li>
        </ul>
        <p className="text-lg mt-5">
          Еще раз благодарим вас за покупку!
        </p>
        <p className="text-lg">
          С уважением, магазин Divine Clothes
        </p>
      </div>
    </>
  );
};

export default ThankYou;

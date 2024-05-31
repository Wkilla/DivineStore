import { Link } from "react-router-dom";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero bg-base-200 bg-blend-overlay">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold max-md:text-4xl text-accent-content">Лучшая одежда!</h1>
          <Link to="http://localhost:5173/shop?search=&category=%D0%B2%D1%81%D0%B5&brand=%D0%B2%D1%81%D0%B5&order=%D0%BF%D0%BE+%D0%B2%D0%BE%D0%B7%D1%80%D0%B0%D1%81%D1%82%D0%B0%D0%BD%D0%B8%D1%8E&gender=%D0%B2%D1%81%D0%B5&price=200000&date=" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-6">Купить сейчас</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

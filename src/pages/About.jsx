import React from "react";
import { SectionTitle } from "../components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <SectionTitle title="О Нас" path="Главная страница | О компании" />
      <div className="about-content text-center max-w-2xl mx-auto mt-5">
     

      <Link to="/contact" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5">Наши контакты</Link>
      </div>
    </div>
  );
};

export default About;

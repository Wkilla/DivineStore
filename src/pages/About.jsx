import React from "react";
import { SectionTitle } from "../components";
import { Link } from "react-router-dom";

const About = () => {
  const fieldStyle = {
    marginBottom: '20px',
    background: '#000',
    color: '#fff',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '50%', 
    marginLeft: 'auto',
    marginRight: 'auto', 
    cursor: 'pointer' 
  };


  const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#fff' 
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Скопировано: ${text}`); 
    }, (err) => {
      console.error('Ошибка при копировании: ', err);
    });
  };

  return (
    <div>
      <SectionTitle title="О Нас" />
      <div className="about-content text-center max-w-2xl mx-auto mt-5">
        <div style={{ marginBottom: '20px' }}>
          <div style={labelStyle}>Владелец магазина</div>
          <div style={fieldStyle}>ИП "Мальцев"</div>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <div style={labelStyle}>Адрес</div>
          <div style={fieldStyle}>Урицкого 63</div>
        </div>
        <div style={{ marginBottom: '20px' }} onClick={() => copyToClipboard("vasya.maltsev.97@bk.ru")}>
          <div style={labelStyle}>Email</div>
          <div style={fieldStyle}>vasya.maltsev.97@bk.ru</div>
        </div>
        <div style={{ marginBottom: '20px' }} onClick={() => copyToClipboard("87077421309")}>
          <div style={labelStyle}>Телефон</div>
          <div style={fieldStyle}>87077421309</div>
        </div>
        <Link to="/contact" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5">Связаться с нами</Link>
      </div>
    </div>
  );
};

export default About;

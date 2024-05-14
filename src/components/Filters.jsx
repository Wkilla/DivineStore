import React, { useState } from "react";
import FormInput from "./FormInput";
import { Form, Link } from "react-router-dom";
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";
import FormDatePicker from "./FormDatePicker";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const [selectCategoryList, setSelectCategoryList] = useState([
    "все",
    "обувь",
    "тапочки",
    "каблуки",
    "футболки",
    "куртки",
    "кепки",
    "шорты",
    "свитера",
    "кроссовки",
    "рубашки",
    "ботинки",
    "верхние рубашки",
    "штаны",
    "джинсы",
    "носки",
    "ремни",
    "спортивной обувь",
  ]);
  const [selectBrandList, setSelectBrandList] = useState([
    "все",
    "WALK LONDON",
    "Reebok",
    "Nike",
    "Jack & Jones",
    "Crocs",
    "Vans",
    "Puma",
    "New Balance",
    "Tommy Jeans",
    "Tommy Hilfiger",
    "Bershka",
    "New Look",
    "AllSaints",
    "Columbia",
    "The North Face",
    "Collusion",
    "ASOS DESIGN",
    "Topman",
    "Dr Denim",
    "Polo Ralph Lauren",
    "ASOS Dark Future",
    "Levi's",
    "Threadbare",
    "Calvin Klein",
    "AAPE BY A BATHING APE®",
    "Good For Nothing",
    "Timberland",
    "Pull and Bear",
    "Koi Footwear",
    "adidas performance",
    "Nike Running",
    "Dr Martens",
    "River Island",
  ]);

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="поиск"
        name="search"
        size="input-sm"
        defaultValue=""
      />
      {/* CATEGORIES */}
      <FormSelect
        label="выберите категорию"
        name="category"
        list={selectCategoryList}
        size="select-sm"
        defaultValue="all"
      />
      {/* COMPANIES */}
      <FormSelect
        label="выберите бренд"
        name="brand"
        list={selectBrandList}
        size="select-sm"
        defaultValue="all"
      />
      {/* ORDER */}
      <FormSelect
        label="Сортировать по"
        name="order"
        list={["по возрастанию", "по убыванию", "высокая цена", "низкая цена"]}
        size="select-sm"
        defaultValue="a-z"
      />
      {/* Producer */}
      <FormSelect
        label="Выберите пол"
        name="gender"
        list={["все", "Мужская", "Женская"]}
        size="select-sm"
        defaultValue="all"
      />
      {/* PRICE */}
      <FormRange
        name="price"
        label="Выберите цену"
        size="range-sm"
        price={2000}
      />
      {/* Date Picker */}
      <FormDatePicker label="Дата производства" name="date" />

      {/* In stock */}
      <FormCheckbox
        label="На складе"
        name="stock"
        defaultValue="false"
      />

      {/* BUTTONS */}

      <button
        type="submit"
        className="btn bg-blue-600 hover:bg-blue-500 text-white btn-sm"
      >
        поиск
      </button>
      <Link to="/shop?page=1" className="btn btn-primary btn-sm">
        сбросить
      </Link>
    </Form>
  );
};

export default Filters;

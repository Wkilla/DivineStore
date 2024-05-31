import React, { useState } from "react";
import FormInput from "./FormInput";
import { Form, Link } from "react-router-dom";
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";

const Filters = () => {
  const [selectCategoryList] = useState([
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
    "штаны",
    "джинсы",
    "носки",
    "ремни",
  ]);
  const [selectBrandList] = useState([
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
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 items-center">
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 items-center gap-x-4 gap-y-8">
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
          defaultValue="все"
        />
        {/* COMPANIES */}
        <FormSelect
          label="выберите бренд"
          name="brand"
          list={selectBrandList}
          size="select-sm"
          defaultValue="все"
        />
        {/* ORDER */}
        <FormSelect
          label="Сортировать по"
          name="order"
          list={["по возрастанию", "по убыванию", "высокая цена", "низкая цена"]}
          size="select-sm"
          defaultValue="по возрастанию"
        />
      </div>
      <div className="w-full flex justify-center gap-4">
        <div className="w-1/2">
          <FormSelect
            label="Выберите пол"
            name="gender"
            list={["все", "Мужская", "Женская"]}
            size="select-sm"
            defaultValue="все"
          />
        </div>
        <div className="w-1/2">
          <FormRange
            name="price"
            label="Выберите цену"
            size="range-sm"
            price={200000}
          />
        </div>
      </div>
      <div className="w-full flex justify-center gap-4">
        <button
          type="submit"
          className="btn bg-blue-600 hover:bg-blue-500 text-white btn-sm"
        >
          поиск
        </button>
        <Link to="/shop?search=&category=все&brand=все&order=по+возрастанию&gender=все&price=200000" className="btn btn-primary btn-sm">
          сбросить
        </Link>
      </div>
    </Form>
  );
};

export default Filters;

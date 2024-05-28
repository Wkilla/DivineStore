
import React, { useEffect, useState } from "react";
import {
  Filters,
  Pagination,
  ProductElement,
  SectionTitle,
} from "../components";
import "../styles/Shop.css";
import axios from "axios";
import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import { nanoid } from "nanoid";

export const shopLoader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);


  let mydate = Date.parse(params.date);

  if (mydate && !isNaN(mydate)) {
    mydate = new Date(mydate).toISOString();
  } else {
    mydate = "";
  }

  const filterObj = {
    brand: params.brand ?? "all",
    category: params.category ?? "all",
    date: mydate ?? "",
    gender: params.gender ?? "all",
    order: params.order ?? "",
    price: params.price ?? "all",
    search: params.search ?? "",
    in_stock: params.stock === undefined ? false : true,
    current_page: Number(params.page) || 1
  };

  let parameter = (`?_start=${(filterObj.current_page - 1) * 10}&_limit=10`) + 
    (filterObj.brand !== 'все' ? `&brandName=${filterObj.brand}` : "") +
    (filterObj.category !== 'все' ? `&category=${filterObj.category}` : "") +
    (filterObj.gender !== 'все' ? `&gender=${filterObj.gender}` : ``) +
    ((filterObj.search != '') ? `&q=${encodeURIComponent(filterObj.search)}` : ``) +
    (filterObj.order ? `&_sort=price.current.value` : "") + 
    (filterObj.in_stock ? (`&isInStock`) : '') +
    (filterObj.price !== 'все' ? `&price.current.value_lte=${filterObj.price}` : ``) +
    (filterObj.date ? `&productionDate=${filterObj.date}` : ``) 

  try {
    const response = await axios(
      `http://localhost:8080/products${parameter}`

    );
    let data = response.data;

    if (filterObj.order && !(filterObj.order === "по возрастанию" || filterObj.order === "низкая цена")) data.sort((a, b) => b.price.current.value - a.price.current.value)
    return { productsData: data, productsLength: data.length, page: filterObj.current_page };
  } catch (error) {
    console.log(error.response);
  }


  return null;
};




const Shop = () => {

  const productLoaderData = useLoaderData();


  return (
    <>
      <SectionTitle title="Магазин"  />
      <div className="max-w-7xl mx-auto mt-5">
        <Filters />
        {productLoaderData.productsData.length === 0 && <h2 className="text-accent-content text-center text-4xl my-10">По этому фильтру не найдено ни одного товара</h2>}
        <div className="grid grid-cols-4 px-2 gap-y-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 shop-products-grid">
          {productLoaderData.productsData.length !== 0 &&
            productLoaderData.productsData.map((product) => (
              <ProductElement
                key={nanoid()}
                id={product.id}
                title={product.name}
                image={product.imageUrl}
                rating={product.rating}
                price={product.price.current.value}
                brandName={product.brandName}
              />
            ))}
        </div>
      </div>

      <Pagination />
    </>
  );
};

export default Shop;

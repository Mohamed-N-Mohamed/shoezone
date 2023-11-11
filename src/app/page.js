"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import data from "./data/data";
import Products from "./components/Products";
import Categories from "./components/Categories";

export default function Home() {
  const [products, setProducts] = useState(data);
  const [filterData, setFilterData] = useState(products);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState("all");

  useEffect(() => {
    let filteredShoes = [...products];
    console.log(filteredShoes);
    setFilterData(filteredShoes);

    if (search !== "") {
      console.log("working");
      filteredShoes = data.filter(({ title }) =>
        title.toLowerCase().includes(search.toLowerCase())
      );
      setFilterData(filteredShoes);
    }
    if (categories !== "all") {
      filteredShoes = data.filter(({ category }) =>
        category.includes(categories)
      );
      setFilterData(filteredShoes);
    }

    if (search !== "" && categories !== "all") {
      filteredShoes = data.filter(({ category, title }) => {
        const titleMatch = title.toLowerCase().includes(search.toLowerCase());
        const categoryMatch = category.includes(categories);
        return titleMatch & categoryMatch;
      });
      setFilterData(filteredShoes);
    }

    // setFilterData(filteredShoes);
  }, [search, categories]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <div className='main flex ju'>
      <div className='rcommended p-4 max-w-6xl mx-auto'>
        <div className='flex justify-between'>
          <div className='search'>
            <input
              type='text'
              className='py-2 px-8 border-none rounded bg-slate-100 outline-none '
              onChange={handleOnChange}
            />
          </div>

          <div className='icons flex gap-8'>
            <FiHeart size={32} />
            <AiOutlineShoppingCart size={32} />
            <AiOutlineUserAdd size={32} />
          </div>
        </div>
        <div className='products-container p-8'>
          <h1 className='text-2xl title'>Recommended</h1>
          <div className='product-categories flex justify-center items-center gap-8 pt-4'>
            <div className='border w-32 py-4  text-center rounded-xl text-sm'>
              All Products
            </div>

            <div className='border w-32 py-4  text-center rounded-xl text-sm'>
              Nike
            </div>
            <div className='border w-32 py-4  text-center rounded-xl text-sm'>
              Addidas
            </div>
            <div className='border w-32 py-4  text-center rounded-xl text-sm'>
              Puma
            </div>
            <div className='border w-32 py-4  text-center rounded-xl text-sm'>
              Vars
            </div>
          </div>
          <div className='all-products'>
            <Products data={filterData} />
          </div>
        </div>
      </div>
      <div className='category'>
        <Categories setCategories={setCategories} categories={categories} />
      </div>
    </div>
  );
}

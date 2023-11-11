import React from "react";

const Products = ({ data }) => {
  return (
    <div className='products grid grid-cols-4 gap-12 justify-center items-center'>
      {data.map(({ title, img, newPrice, prevPrice, reviews, star }) => (
        <div className='shoe border'>
          <h2>{title}</h2>
          <img src={img} alt='product title w-32' />
          <p>{reviews}</p>
          <p>${newPrice}</p>
          <p>{prevPrice}</p>
          <p>{star}</p><p>{star}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;

import React from "react";

const Products = ({ data }) => {
  return (
    <div className='products grid grid-cols-4 gap-12 justify-center items-center pt-4'>
      {data.map(({ title, img, newPrice, prevPrice, reviews, star, id }) => (
        <div className='shoe border h-[250px] w-[250px]' key={id}>
          <div className='title'>
            <h2 className='text-lg py-4 text-center'>{title}</h2>
          </div>
          <div className='image w-20 mx-auto'>
            <img src={img} alt='product title ' className='object-contain' />
          </div>

          <div className='price flex justify-center gap-4 p-4 item-center'>
            <del>£{newPrice}</del>
            <p className='text-red-500'>{prevPrice}</p>
          </div>
          <div className='reviews flex justify-center items-center py-4 '>
            <p>{reviews}</p>
            <div className='star flex'>
              <p className='text-amber-300'>{star}</p>
              <p className='text-amber-300'>{star}</p>
              <p className='text-amber-300'>{star}</p>
              <p className='text-amber-300'>{star}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

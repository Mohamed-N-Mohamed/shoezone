import React from "react";

const Categories = () => {
  return (
    <div className='location py-8 flex flex-col gap-4'>
      <h3 className='text-lg font-bold'>Choose a Location:</h3>
      <label className='flex items-center space-x-2'>
        <input
          type='radio'
          value='All'
          className='form-radio text-blue-600'
          // checked={location === "All"}
          // onChange={changeLocation}
        />
        <span>All</span>
      </label>
      <label className='flex items-center space-x-2'>
        <input
          type='radio'
          value='Sneakers'
          className='form-radio text-blue-600'
          // checked={location === "London"}
          // onChange={changeLocation}
        />
        <span>Sneakers</span>
      </label>

      <label className='flex items-center space-x-2'>
        <input
          type='radio'
          value='Flats'
          className='form-radio text-blue-600'
          // checked={location === "Manchester"}
          // onChange={changeLocation}
        />
        <span>Flats</span>
      </label>

      <label className='flex items-center space-x-2'>
        <input
          type='radio'
          value='Sandals'
          className='form-radio text-blue-600'
          // checked={location === "Manchester"}
          // onChange={changeLocation}
        />
        <span>Sandals</span>
      </label>

      <label className='flex items-center space-x-2'>
        <input
          type='radio'
          value='Heels'
          className='form-radio text-blue-600'
          // checked={location === "Manchester"}
          // onChange={changeLocation}
        />
        <span>Heels</span>
      </label>
    </div>
  );
};

export default Categories;

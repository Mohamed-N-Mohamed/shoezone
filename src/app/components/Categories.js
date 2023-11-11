import React from "react";

const Categories = ({ setCategories, categories }) => {
  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setCategories(value);
  };
  return (
    <div className='location py-8 flex flex-col gap-4'>
      <h3 className='text-lg font-bold'>Choose a Location:</h3>
      <label className='flex items-center space-x-2'>
        <input
          type='radio'
          value='all'
          className='form-radio text-blue-600'
          checked={categories === "all"}
          onChange={handleCategoryChange}
        />
        <span>All</span>
      </label>
      <label className='flex items-center space-x-2'>
        <input
          type='radio'
          value='sneakers'
          className='form-radio text-blue-600'
          checked={categories === "sneakers"}
          onChange={handleCategoryChange}
        />
        <span>Sneakers</span>
      </label>

      <label className='flex items-center space-x-2'>
        <input
          type='radio'
          value='flats'
          className='form-radio text-blue-600'
          checked={categories === "flats"}
          onChange={handleCategoryChange}
        />
        <span>Flats</span>
      </label>

      <label className='flex items-center space-x-2'>
        <input
          type='radio'
          value='sandals'
          className='form-radio text-blue-600'
          checked={categories === "sandals"}
          onChange={handleCategoryChange}
        />
        <span>Sandals</span>
      </label>

      <label className='flex items-center space-x-2'>
        <input
          type='radio'
          value='heels'
          className='form-radio text-blue-600'
          checked={categories === "heels"}
          onChange={handleCategoryChange}
        />
        <span>Heels</span>
      </label>
    </div>
  );
};

export default Categories;

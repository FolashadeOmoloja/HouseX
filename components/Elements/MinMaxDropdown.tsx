
import React, { useState } from 'react';

const MinMaxDropdown = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMinPriceChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setMaxPrice(e.target.value);
  };

  return (
    <div>
      <span className='block'>Price Range</span>
      <div className="relative ">
        <button
          onClick={toggleDropdown}
          className="w-40 h-6 text-left overflow-x-hidden italic text-[#8e9e9d]"
        >
          {minPrice && maxPrice
            ? `${minPrice} - ${maxPrice}`
            : 'Select Price Range'}
        </button>
        {isDropdownOpen && (
          <div className="absolute top-12 left-[-40%]  bg-white rounded-xl ">
            <div className="flex gap-2 p-2">
              <label htmlFor="minPrice">Min</label>
              <input
                type="number"
                id="minPrice"
                name="minPrice"
                className="maxmin-input"
                value={minPrice}
                onChange={handleMinPriceChange}
              />
              <label htmlFor="maxPrice">Max</label>
              <input
                type="number"
                id="maxPrice"
                name="maxPrice"
                className="maxmin-input"
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MinMaxDropdown;

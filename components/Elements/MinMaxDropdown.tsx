
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
      <label htmlFor="price">Price Range</label>
      <div className="relative ">
        <button
          onClick={toggleDropdown}
          className="w-40 h-6 border-[#7e9999] border text-left"
        >
          {minPrice && maxPrice
            ? `${minPrice} - ${maxPrice}`
            : 'Select Price Range'}
        </button>
        {isDropdownOpen && (
          <div className="absolute top-16 left-0 w-32 bg-white border border-gray-300 ">
            <div className="flex gap-2 p-2">
              <label htmlFor="minPrice">Min</label>
              <input
                type="number"
                id="minPrice"
                name="minPrice"
                className="w-[80px] border-[#7e9999] border mb-2 outline-none"
                value={minPrice}
                onChange={handleMinPriceChange}
              />
              <label htmlFor="maxPrice">Max</label>
              <input
                type="number"
                id="maxPrice"
                name="maxPrice"
                className="w-full border-[#7e9999] border"
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


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
      <div className="relative inline-block">
        <button
          onClick={toggleDropdown}
          className="w-32 h-14 border-[#7e9999] border text-left pl-2 pr-8"
        >
          {minPrice && maxPrice
            ? `${minPrice} - ${maxPrice}`
            : 'Select Price Range'}
        </button>
        {isDropdownOpen && (
          <div className="absolute top-16 left-0 w-32 bg-white border border-gray-300">
            <div className="flex flex-col p-2">
              <label htmlFor="minPrice">Min</label>
              <input
                type="number"
                id="minPrice"
                name="minPrice"
                className="w-full border-[#7e9999] border mb-2"
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

'use client'
import { useState } from 'react'
import { FaSearchLocation } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div className='w-14 h-14 bg-white text-[#c3d4cc] flex div-center rounded-2xl transtion ease duration-500'>
    <section className='w-11 h-11 bg-[#7e9999] rounded-2xl flex div-center text-[20px]'>
        <section>

        </section>
        <section>
        <div>
        <label htmlFor="property">Property Type</label>
             <select name="properties" id="property">
                 <option value="residential">Residential House</option>
                 <option value="apartment">Apartments</option>
                 <option value="commercial">Commercial Building</option>
                 <option value="condo">Condominium</option>
                 <option value="land">TownHouse</option>
             </select>
        </div>
        </section>
        <FaSearchLocation/>
    </section>
   </div>
  )
}

export default SearchBar
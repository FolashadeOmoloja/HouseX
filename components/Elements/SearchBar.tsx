'use client'
import { properties } from '@/Constants'
import { useState } from 'react'
import { FaSearchLocation } from 'react-icons/fa'
import MinMaxDropdown from './MinMaxDropdown'



const SearchBar = () => {
  return (
 <section className='h-14 bg-white transtion ease duration-500 flex rounded-2xl justify-between'>
    <section className='flex'>
        <div className='basis-1/4'>
        <label htmlFor="property">Property Type</label>
             <select name="properties" id="property" className='flex'>
                  {
                    properties.map((item,idx)=>{
                      return <option value={item.value} key={idx}
                      className=''
                      >{item.options}
                      </option>
                    })
                  }
             </select>
        </div>
        <div className='flex flex-col basis-1/4'>
            <label htmlFor="location">Location</label>
            <input type="text" />
        </div>
        <div className='basis-1/4'>
        <MinMaxDropdown/>
        </div>
    </section>

    <div className='w-14 h-full bg-white text-white flex div-center rounded-2xl basis-1/4'>
        <section className='w-11 h-11 bg-[#7e9999] rounded-2xl flex div-center text-[20px]'>
            <FaSearchLocation/>
        </section>
    </div>
 </section>
  )
}

export default SearchBar
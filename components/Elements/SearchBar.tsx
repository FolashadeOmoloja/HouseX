'use client'
import { properties } from '@/Constants'
import { useState } from 'react'
import { FaSearchLocation } from 'react-icons/fa'
import MinMaxDropdown from './MinMaxDropdown'



const SearchBar = () => {
  return (
 <section className='h-14 bg-white transtion ease duration-500 flex rounded-2xl  text-[13px] max-w-[580px]'>
    <section className='flex w-full pl-3 div-center'>
        <div className='basis-[33.33%]'>
        <label htmlFor="property" className='ml-1'>Property Type</label>
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
        <div className='flex flex-col basis-[33.33%]'>
            <label htmlFor="location">Location</label>
            <input type="text" placeholder='Select a Location' className='text-[#8e9e9d] italic outline-none'/>
        </div>
        <div className='basis-[33.33%]'>
        <MinMaxDropdown/>
        </div>
    </section>

    <div className='w-14 h-full bg-white text-white flex div-center rounded-xl '>
        <section className='w-10 h-10 bg-[#7e9999] rounded-xl flex div-center text-[20px]'>
            <FaSearchLocation/>
        </section>
    </div>
 </section>
  )
}

export default SearchBar
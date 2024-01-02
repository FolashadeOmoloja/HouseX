import React from 'react'
import { FaSearchLocation } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div className='w-14 h-14 bg-white text-[#c3d4cc] flex div-center rounded-2xl'>
    <div className='w-11 h-11 bg-[#7e9999] rounded-2xl flex div-center text-[20px]'>
        <FaSearchLocation/>
    </div>
   </div>
  )
}

export default SearchBar
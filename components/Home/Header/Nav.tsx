import Link from 'next/link'
import React from 'react'


const NavBar = () => {
  return (
    <nav className='nav  pl-2.5 md:pl-20'>                     
      <ul className="flex justify-between w-full ">
          <li className='text-[24px] font-bold flex items-center '> H<img src="home.png" alt="" className='w-5 h-5 mb-[2px]'/>useX</li>
          <li className="list-item"><Link href={'#'}>Properties</Link></li>
          <li className="list-item"><Link href={'#'}>Buyers</Link></li>
          <li className="list-item"><Link href={'#'}>Sellers</Link></li>
          <li className="list-item"><Link href={'#'}>Valuation</Link></li>
          <li className="list-item"><Link href={'#'}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
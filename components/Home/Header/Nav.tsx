import Link from 'next/link'
import React from 'react'
import Login from './Login'
import MobileNav from './MobileNav'


const NavBar = () => {
  return (
    <nav className='nav  pl-4 md:pl-20 box-shadow max-xslg:justify-between'>                     
      <ul className="flex justify-between w-full basis-3/5">
          <li className='text-[24px] font-bold flex items-center '> H<img src="home.png" alt="" className='w-5 h-5 mb-[2px]'/>useX</li>
          <li className="list-item max-xslg:hidden"><Link href={'#'}>Properties</Link></li>
          <li className="list-item max-xslg:hidden"><Link href={'#'}>Buyers</Link></li>
          <li className="list-item max-xslg:hidden"><Link href={'#'}>Sellers</Link></li>
          <li className="list-item max-xslg:hidden"><Link href={'#'}>Valuation</Link></li>
          <li className="list-item max-xslg:hidden"><Link href={'#'}>Contact</Link></li>
      </ul>
      <section className='basis-2/5 max-xslg:hidden'>
      <Login/>
      </section>
      <MobileNav/>
    </nav>
  )
}

export default NavBar
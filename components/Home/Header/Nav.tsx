import React from 'react'


const NavBar = () => {
  return (
    <nav className='nav  pl-2.5 md:pl-20'>                     
      <ul className="flex justify-between w-full ">
          <li className='text-[24px] font-bold flex items-center '> <span>H</span><img src="home.png" alt="" className='w-5 h-5'/><span>useX</span></li>
          <li className="list-item">Properties</li>
          <li className="list-item">Buyers</li>
          <li className="list-item">Sellers</li>
          <li className="list-item">Valuation</li>
          <li className="list-item">Contact</li>
      </ul>
    </nav>
  )
}

export default NavBar
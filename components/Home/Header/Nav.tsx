import React from 'react'


const NavBar = () => {
  return (
    <nav>                     
      <ul className="flex justify-between text-sm">
          <li className='flex'> <h2>H<img src="home.png" alt="" className='w-4 h-4'/>useX</h2></li>
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
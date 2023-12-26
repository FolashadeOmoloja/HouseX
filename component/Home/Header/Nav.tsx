import React from 'react'


const NavBar = () => {
  return (
    <nav>
                        
      <ul className="flex justify-between">
          <li id="logo"> <h2>H<img src="home.png" alt=""/>useX</h2></li>
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
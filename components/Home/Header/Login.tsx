import React from 'react'

const Login = () => {
  return (
    <nav className='flex gap-8 nav pr-2.5 md:pr-20 justify-end box-shadow'>
        <button className='list-item'>Login</button>
        <button className='px-7 py-[10px] rounded-[20px] bg-[#c0ccce] hover:bg-transparent hover:border-2 hover:border-[#c0ccce]'>Sign Up</button>
    </nav>
  )
}

export default Login
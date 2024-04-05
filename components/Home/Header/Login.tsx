import React from 'react'

interface Iprop{
  display?:string,
  width?:string,
  cta?:string,
  justifyEnd?:boolean,
}

const Login:React.FC<Iprop> = ({display='', width, cta='Sign Up',justifyEnd=true}) => {
  return (
    <section className={`flex gap-8 ${justifyEnd?"justify-end pr-2.5 md:pr-20":"justify-center"}  max-md:flex-col`}>
        <button className={`list-item ${display}`}>Login</button>
        <button className={`relative inline-flex items-center justify-center p-4 px-6 py-[10px] overflow-hidden font-medium  transition duration-300 ease-out border-2 hover:text-[#5d7b7d] rounded-full shadow-md group ${width}`}>
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-[#5d7b7de] group-hover:translate-x-0 ease gap-2">
                  <span>{cta}</span>
              <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-[#5d7b7d] transition-all duration-300 transform group-hover:translate-x-full ease">{cta}</span>
              <span className="relative invisible">Button Text</span>
      </button>
    </section>
  )
}

export default Login
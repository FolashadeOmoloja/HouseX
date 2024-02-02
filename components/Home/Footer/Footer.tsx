import React from 'react'

const Footer = () => {
  return (
     <footer className='bg-[#f3f6fd] px-4 mt-24 text-[#4b5456] pt-20'>
            <main className='bg-white rounded-3xl px-2.5 md:px-20 md:py-10 py-2.5 mx-auto h-[500px]'>
                <section className='flex flex-col'>
                      <span className='text-[24px] font-bold flex items-center text-transparent bg-clip-text headersection-gradien '>H<img src="home.png" alt="" className='w-5 h-5 mb-[2px]'/>useX</span>
                      <p className='text-[32px] mt-8 text-transparent bg-clip-text headersection-gradient'>YOUR BEST <br /> REAL ESTATE <br /> MARKETPLACE</p>
                      <span className='self-end'>copywrite@2024</span>
                </section>
                <section>

                </section>
            </main>

     </footer>
  )
}

export default Footer
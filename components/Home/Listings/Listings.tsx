import React from 'react'

const Listings = () => {
  return (
    <main className='maxWidthWrapper  text-[#4b5456] max-xlg:text-center'>
         <h2 className='text-[40px] max-slg:text-3xl  max-xsm:text-2xl text-transparent bg-clip-text headersection-gradient mb-10'>Our Top Deals & Best Listings</h2>
         <section className='flex justify-between items-center'>
            <span>Your Housing solutions </span>
            <div className='flex items-center relative'>
                <div className='w-14 h-14 rounded-full'><img src="circle2.jpg" alt="img" className='w-full h-full rounded-full relative right-[-20px]' /></div>
                <div className='w-16 h-16 rounded-full'><img src="circle1.jpg" alt="img" className='w-full h-full rounded-full relative z-10' /></div>
                <div className='w-14 h-14 rounded-full'><img src="circle3.jpg" alt="img" className='w-full h-full rounded-full relative right-[20px] z-1' /></div>
            </div>
            <p className=''>With over 17,000 satisfied customers, <br /> we have curated the best property listings for you <br /> to ensure you get the value for your money</p>
         </section>
    </main>
  )
}

export default Listings
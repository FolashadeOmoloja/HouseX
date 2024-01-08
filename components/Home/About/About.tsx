import React from 'react'
import ShapedBox from '../../Elements/ShapedBox'

const About = () => {
  return (
    <main className='maxWidthWrapper bg-white'>
        <section className='flex justify-between items-end max-slg:flex-col max-slg:text-center max-slg:items-center max-slg:gap-6'>
            <h2 className='basis-3/5 text-[40px] max-slg:text-3xl  max-xsm:text-2xl'>Your Trusted Real Estate <br className='max-xslg:hidden' /> Marketplace</h2>
            <p className='text-sm text-[#4b5456] basis-2/5'>Your cutting-edge real estate marketplace that offers a seamless and immersive experience for finding your dream home. A safespace for Landlords to enlist their properties and verify potential buyers or renters. </p>
        </section>
        <section className='mt-14 flex gap-5 flex-wrap'>
            <ShapedBox/>
            <div className={`h-[270px] w-[230px] bg-[#4b5456] relative slanted-div  rounded-2xl  z-1`}>
           <div className={`absolute top-0 right-0  w-[80px] h-[80px] border-t-[80px] border-t-white border-l-[80px] border-l-[#4b5456] `}></div>
           <div className={`absolute bottom-0 left-0 w-[80px] h-[80px] border-b-[80px] border-b-white border-r-[80px] border-r-[#4b5456]`}></div>
           <div className='slanted-div2'></div>
           <div className={`bg-[#4b5456] h-[70px] w-4 rounded-[20px] rotate-[135deg] z-10 absolute bottom-[-4px] left-[15px]`}></div>
           <div className='text-contents div-center h-full flex-col text-white'>
              <span className='font-semibold text-3xl'>10+</span>
              <span>Years of Experience</span>
           </div>
        </div>
            <ShapedBox title='7+' text='Awards Won'/>
            <ShapedBox title='13K+' text='Properties collection'/>
        </section>


    </main>
  )
}

export default About
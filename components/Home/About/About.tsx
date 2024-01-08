import React from 'react'
import ShapedBox from '../../Elements/ShapedBox'

const About = () => {
  return (
    <main className='maxWidthWrapper bg-white'>
        <section className='flex justify-between items-end max-slg:flex-col max-slg:text-center max-slg:items-center max-slg:gap-6'>
            <h2 className='basis-3/5 text-[40px] max-slg:text-3xl  max-xsm:text-2xl'>Your Trusted Real Estate <br className='max-xslg:hidden' /> Marketplace</h2>
            <p className='text-sm text-[#4b5456] basis-2/5'>Your cutting-edge real estate marketplace that offers a seamless and immersive experience for finding your dream home. A safespace for Landlords to enlist their properties and verify potential buyers or renters. </p>
        </section>
        <section className='mt-14 '>
            <ShapedBox/>
        </section>


    </main>
  )
}

export default About
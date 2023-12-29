import { PT_Serif } from 'next/font/google'
import { FaSearchLocation } from "react-icons/fa";

const ptSerif = PT_Serif(
  {
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-ptSerif'
  }
)

const HeadLine = () => {
  return (
    <section className='maxWidthWrapper py-20'>
         <h1 className={`${ptSerif.className} text-[44px] text-white font-bold`}>Sell or rent your
         <br /> <span className='text-black'>Home</span> at the best prices</h1>
         <h2 className='mt-10'>Discover a place you would love to live</h2>
         <p>Connect with more than 75 million renters looking for new homes<br/>using our comprehensive marketing platform</p>
         <section className=''>
             <div className='w-14 h-14 bg-white text-[#c0ccce] flex div-center rounded-2xl'>
              <div className='w-11 h-11 bg-[#5d6769] rounded-2xl flex div-center'><FaSearchLocation/></div>
             </div>
         </section>
    </section>
  )
}

export default HeadLine
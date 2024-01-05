import { popularSearches } from '@/Constants';
import SearchBar from '@/components/Elements/SearchBar';
import { PT_Serif } from 'next/font/google'


const ptSerif = PT_Serif(
  {
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-ptSerif'
  }
)

const HeadLine = () => {
  return (
    <section className='maxWidthWrapper  max-xslg:div-center flex-col max-xslg:text-center max-w-[100vw]'>
         <h1 className={`${ptSerif.className} text-[44px] text-white font-bold max-xsm:text-[32px]`}>Sell or rent your
         <br /> <span className='text-black'>Home</span> at the best prices</h1>
         <p className='mt-5'>
         HouseX streamlines rental management in Africa, offering free listings, flexible payments, and automated tools for renters and landlords. Discover your ideal home and connect with millions through our robust marketing platform.</p>
         <section className='mt-8 text-left '>
             <SearchBar/>
         </section>
         <section className='flex mt-10 gap-2 max-sm:flex-col'>
          <span className='max-md:mb-1'>Popular Search: </span>
          <div className='flex gap-3 max-md:flex-wrap max-sm:justify-center'>
            {
              popularSearches.map((item, idx)=>{
                return <span className='text-sm px-2 py-1 rounded-lg bg-[#ffffff73]' key={idx}>{item}</span>
              })
            }
          </div>
         </section>
    </section>
  )
}

export default HeadLine
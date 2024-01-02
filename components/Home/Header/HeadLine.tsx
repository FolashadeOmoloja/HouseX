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
    <section className='maxWidthWrapper py-20'>
         <h1 className={`${ptSerif.className} text-[44px] text-white font-bold`}>Sell or rent your
         <br /> <span className='text-black'>Home</span> at the best prices</h1>
         <p className='mt-10'>
         HouseX streamlines rental management in Africa, offering free listings, flexible payments, and automated tools for renters and landlords. Discover your ideal home and connect with millions through our robust marketing platform.</p>
         <section className='mt-8'>
             <SearchBar/>
         </section>
    </section>
  )
}

export default HeadLine
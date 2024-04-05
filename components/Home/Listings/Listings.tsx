import Login from '../Header/Login'
import ListingCarousel from './ListingCarousel'


const ListingsItems = [
  {img:'circle2.jpg', key: 0}, 
  {img:'circle1.jpg', key: 1},
  {img:'circle3.jpg', key: 2} ,
  {img:'circle2.jpg', key: 3}, 
  {img:'circle1.jpg', key: 4}, 
  {img:'circle3.jpg', key: 5},
]

const Listings = () => {
  return (
    <main className='maxWidthWrapper  text-[#4b5456] max-xlg:text-center'>
         <h2 className='text-[40px] max-slg:text-3xl  text-transparent bg-clip-text headersection-gradient mb-10'>Our Top Deals & Best Listings</h2>
         <section className='flex justify-between items-center max-slg:flex-col max-slg:gap-5'>
            <span>Your Housing solutions </span>
            <div className='flex items-center relative'>
                <div className='w-12 h-12 rounded-full'><img src="circle2.jpg" alt="img" className='w-full h-full rounded-full relative right-[-20px]' /></div>
                <div className='w-[68px] h-[68px] rounded-full border-2 shadow-md'><img src="circle1.jpg" alt="img" className='w-full h-full rounded-full relative z-10 ' /></div>
                <div className='w-12 h-12 rounded-full'><img src="circle3.jpg" alt="img" className='w-full h-full rounded-full relative right-[20px] z-1' /></div>
            </div>
            <p className='max-sm:text-sm'>With over 17,000 satisfied customers, <br /> we have curated the best property listings for you <br className="max-sm:hidden"/> to ensure you get the value for your money</p>
         </section>
         <ListingCarousel items={ListingsItems as unknown as [{img:'', key:number}]}/>
         <div className=" mt-20">
              <Login display="hidden" cta="Marketplace" justifyEnd={false} width="md:w-[300px] w-full"/>
        </div>
    </main>
  )
}

export default Listings
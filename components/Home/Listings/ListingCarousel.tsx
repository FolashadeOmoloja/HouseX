import { ListingBox } from '@/components/Elements/ShapedBox'
import React from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

const ListingCarousel = () => {
  return (
    <section className='mt-20 relative'>
    <button><FaChevronCircleLeft className=' left-[-22px]  slider-icon  ' /></button>
      <section className='div-center gap-5 overflow-x-scroll cursor-grab'>
                 {
                  ListingsItems.map((item, idx)=>{
                    return <ListingBox img={item} key={idx}/>
                  })
                 }

      </section>
      <button><FaChevronCircleRight className=' right-[-22px] slider-icon'/></button>
 </section>
  )
}

export default ListingCarousel
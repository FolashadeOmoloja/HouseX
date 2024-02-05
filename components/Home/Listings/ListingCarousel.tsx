"use client"
import { ListingBox } from '@/components/Elements/ShapedBox'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react';

interface CarouselProps {
    items: string[]; 
  }

const ListingCarousel:React.FC<CarouselProps> = ({items}) => {

    const carouselRef = useRef<HTMLDivElement>(null);
    const [isDragStart, setIsDragStart] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [prevPageX, setPrevPageX] = useState(0);
    const [prevScrollLeft, setPrevScrollLeft] = useState(0);
    const [positionDiff, setPositionDiff] = useState(0);


    useEffect(() => {
        const carousel = carouselRef.current;
    
        const showHideIcons = () => {
        };
      }, []);
  
  return (
    <section className='mt-20 relative' ref={carouselRef}>
    <button><FaChevronCircleLeft className=' left-[-22px]  slider-icon  ' /></button>
      <section className='div-center gap-5 overflow-x-scroll cursor-grab'>
                 {
                  items.map((item, idx)=>{
                    return <ListingBox img={item} key={idx}/>
                  })
                 }

      </section>
      <button><FaChevronCircleRight className=' right-[-22px] slider-icon'/></button>
 </section>
  )
}

export default ListingCarousel
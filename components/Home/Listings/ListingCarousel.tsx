"use client"
import { ListingBox } from '@/components/Elements/ShapedBox'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react';

interface CarouselProps {
    items: [{img:'',key:number}]; 
  }

const ListingCarousel:React.FC<CarouselProps> = ({items}) => {

    const carouselRef = useRef<HTMLDivElement>(document.createElement('div'));
    const leftButton = useRef<HTMLButtonElement>(document.createElement('button'));
    const rightButton = useRef<HTMLButtonElement>(document.createElement('button'));
    const [isDragStart, setIsDragStart] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [prevPageX, setPrevPageX] = useState(0);
    const [prevScrollLeft, setPrevScrollLeft] = useState(0);
    const [positionDiff, setPositionDiff] = useState(0);


    useEffect(() => {
        const carousel = carouselRef.current;

        let scrollWidth;
        if(carousel!=null) {
            scrollWidth = carousel.scrollWidth - carousel.clientWidth;
        }
    
        const showHideIcons = () => {
        };
      }, []);
  
  return (
    <section className='mt-20 relative' ref={carouselRef}>
    <button className='left-scroll'><FaChevronCircleLeft className=' left-[-22px]  slider-icon  ' /></button>
      <section className='div-center gap-5 overflow-x-scroll cursor-grab'>
                 {
                  items.map((item, idx)=>{
                    return <ListingBox img={item.img} idx={idx}/>
                  })
                 }

      </section>
      <button className='right-scroll'><FaChevronCircleRight className=' right-[-22px] slider-icon '/></button>
 </section>
  )
}

export default ListingCarousel
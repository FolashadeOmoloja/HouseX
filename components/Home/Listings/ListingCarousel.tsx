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
    // const [positionDiff, setPositionDiff] = useState(0);


    useEffect(() => {
        const carousel = carouselRef.current;
    
        const showHideIcons = () => {
            const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
            // Assuming you have left and right icons as children of the carousel element
            const leftIcon = carousel.firstElementChild as HTMLElement;
            const rightIcon = carousel.lastElementChild as HTMLElement;
            leftIcon.style.display = carousel.scrollLeft === 0 ? 'none' : 'block';
            rightIcon.style.display = carousel.scrollLeft === scrollWidth ? 'none' : 'block';
            
        };

        const autoSlide = () => {
            if (
              carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 ||
              carousel.scrollLeft <= 0
            )
              return;
            let positionDiff = 0
            positionDiff = Math.abs(positionDiff);
            const firstImgWidth = carousel.firstElementChild?.clientWidth + 14 || 0;
            const valDifference = firstImgWidth - positionDiff;
      
            if (carousel.scrollLeft > prevScrollLeft) {
              return (
                (carousel.scrollLeft +=
                  positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff),
                showHideIcons()
              );
            }
      
            carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
            showHideIcons();
          };
      }, []);
  
  return (
    <section className='mt-20 relative' ref={carouselRef}>
    <button><FaChevronCircleLeft className=' left-[-22px]  slider-icon  ' /></button>
      <section className='div-center gap-5 overflow-x-scroll cursor-grab'>
                 {
                  items.map((item, idx)=>{
                    return <ListingBox img={item.img} idx={idx}/>
                  })
                 }

      </section>
      <button><FaChevronCircleRight className=' right-[-22px] slider-icon '/></button>
 </section>
  )
}

export default ListingCarousel
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
           
        const dragStart = (e:MouseEvent) =>{
            setIsDragStart(true)
            setPrevPageX(e.pageX)
            setPrevScrollLeft(carousel.scrollLeft)
        }
        const dragStop = () =>{
            setIsDragStart(false)
        }
       
            const dragging = (e:MouseEvent)=>{
                if (!isDragStart) return;
                e.preventDefault();
                setPositionDiff(e.pageX - prevPageX)
                carousel.scrollLeft = prevScrollLeft - positionDiff;
    }
        carousel.addEventListener('mousedown', dragStart);  
        carousel.addEventListener('mouseup', dragStop);
        carousel.addEventListener('mousemove', dragging);


          return () => {
            carousel.removeEventListener('mousemove', dragging);
            carousel.removeEventListener('mousedown', dragStart)
            carousel.removeEventListener('mouseup', dragStop)
          };
    
      }, [carouselRef, isDragStart, prevPageX, prevScrollLeft, positionDiff]);

    //   console.log(isDragStart)

    // useEffect(() => {
    //     const carousel = carouselRef.current;
    
    //     const showHideIcons = () => {
    //         const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    //         // Assuming you have left and right icons as children of the carousel element
    //         const leftIcon = carousel.firstElementChild as HTMLElement;
    //         const rightIcon = carousel.lastElementChild as HTMLElement;
    //         leftIcon.style.display = carousel.scrollLeft === 0 ? 'none' : 'block';
    //         rightIcon.style.display = carousel.scrollLeft === scrollWidth ? 'none' : 'block';
            
    //     };

    //     const autoSlide = () => {
    //         if (
    //           carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 ||
    //           carousel.scrollLeft <= 0
    //         )
    //           return;
            
    //         setPositionDiff(Math.abs(positionDiff))
    //         const firstImgWidth = carousel.firstElementChild?.clientWidth as number + 14 || 0;
    //         const valDifference = firstImgWidth - positionDiff;
      
    //         if (carousel.scrollLeft > prevScrollLeft) {
    //           return (
    //             (carousel.scrollLeft +=
    //               positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff),
    //             showHideIcons()
    //           );
    //         }
      
    //         carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    //         showHideIcons();
    //       };

    //       const dragStart = (e) => {
    //         setIsDragStart(true);
    //         setPrevPageX(e.pageX || (e.touch && e.touches[0].pageX) || 0);
    //         setPrevScrollLeft(carousel.scrollLeft);
    //       };
      
    //       const dragging = (e) => {
    //         if (!isDragStart) return;
      
    //         e.preventDefault();
    //         setIsDragging(true);
    //         carousel.classList.add('dragging');
    //         setPositionDiff((e.pageX || (e.touches && e.touches[0].pageX) || 0) - prevPageX);
    //         carousel.scrollLeft = prevScrollLeft - positionDiff;
    //         showHideIcons();
    //       };
      
    //       const dragStop = () => {
    //         setIsDragStart(false);
    //         carousel.classList.remove('dragging');
      
    //         if (!isDragging) return;
    //         setIsDragging(false);
    //         autoSlide();
    //       };
      
    //       carousel.addEventListener('mousedown', dragStart);
    //       carousel.addEventListener('touchstart', dragStart);
      
    //       document.addEventListener('mousemove', dragging);
    //       carousel.addEventListener('touchmove', dragging);
      
    //       document.addEventListener('mouseup', dragStop);
    //       carousel.addEventListener('touchend', dragStop);
      
    //       // Cleanup event listeners when the component unmounts
    //       return () => {
    //         carousel.removeEventListener('mousedown', dragStart);
    //         carousel.removeEventListener('touchstart', dragStart);
    //         document.removeEventListener('mousemove', dragging);
    //         carousel.removeEventListener('touchmove', dragging);
    //         document.removeEventListener('mouseup', dragStop);
    //         carousel.removeEventListener('touchend', dragStop);
    //       };
    //   }, [carouselRef, prevPageX, prevScrollLeft, positionDiff, isDragStart, isDragging]);
  
  return (
    <section className='mt-20 relative' >
    <button><FaChevronCircleLeft className=' left-[-22px]  slider-icon  ' /></button>
      <section className={`flex gap-4 overflow-x-hidden   whitespace-nowrap ${isDragStart ? 'cursor-grab': 'cursor-pointer'} `} ref={carouselRef}>
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
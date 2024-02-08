"use client"
import { ListingBox } from '@/components/Elements/ShapedBox'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react';

interface CarouselProps {
    items: [{img:'',key:number}]; 
  }

const ListingCarousel:React.FC<CarouselProps> = ({items}) => {

    const carouselRef = useRef<HTMLDivElement>(document.createElement('div'));
    const [isDragStart, setIsDragStart] = useState(false);
    const [prevPageX, setPrevPageX] = useState(0);
    const [prevScrollLeft, setPrevScrollLeft] = useState(0);
    const [positionDiff, setPositionDiff] = useState(0);
    const [showLeftIcon, setShowLeftIcon] = useState(false)
    const [showRightIcon, setShowRightIcon] = useState(true)
   
    useEffect(() => {
        const carousel = carouselRef.current;
        const leftButton = carousel.previousElementSibling as HTMLElement;
        const rightButton = carousel.nextElementSibling as HTMLElement;
        const firstImgWidth = carousel.firstElementChild?.clientWidth as number + 16
        const scrollWidth = carousel.scrollWidth - carousel.clientWidth;



        const updateIconVisibility = () => {
            setShowLeftIcon(carousel.scrollLeft !== 0);
            setShowRightIcon(carousel.scrollLeft !== scrollWidth);
        };


        const leftButtonFunc = () =>{
                 carousel.scrollLeft += -firstImgWidth
                 setTimeout(()=>updateIconVisibility(),60 )
        }


        
        
        const rightButtonFunc = () =>{
            carousel.scrollLeft += firstImgWidth
            setTimeout(()=>updateIconVisibility(),60 )
   }

        leftButton.addEventListener('click',leftButtonFunc)
        rightButton.addEventListener('click',rightButtonFunc)

           
        const dragStart = (e:MouseEvent | TouchEvent) =>{
            setIsDragStart(true)
            const pageX = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX;
            setPrevPageX(pageX)
            setPrevScrollLeft(carousel.scrollLeft)
        }
        const dragStop = () =>{
            setIsDragStart(false)
        }
       
            const dragging = (e:MouseEvent | TouchEvent)=>{
                if (!isDragStart) return;
                e.preventDefault();
                const pageX = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX;
                setPositionDiff(pageX - prevPageX)
                carousel.scrollLeft = prevScrollLeft - positionDiff;
                setTimeout(()=>updateIconVisibility(),60 )
    }
        carousel.addEventListener('mousedown', dragStart);  
        carousel.addEventListener('touchstart', dragStart);
        carousel.addEventListener('mouseup', dragStop);
        carousel.addEventListener('mouseleave', dragStop);
        carousel.addEventListener('touchend', dragStop);
        carousel.addEventListener('mousemove', dragging);
        carousel.addEventListener('touchmove', dragging);


          return () => {
            leftButton.removeEventListener('click',leftButtonFunc)
            rightButton.removeEventListener('click',rightButtonFunc)
            carousel.removeEventListener('mousemove', dragging);
            carousel.removeEventListener('touchmove', dragging);
            carousel.removeEventListener('mousedown', dragStart)
            carousel.removeEventListener('mouseup', dragStop)
            carousel.removeEventListener('mouseleave', dragStop)
            carousel.removeEventListener('touchend', dragStop);
          };
    
      }, [carouselRef, isDragStart, prevPageX, prevScrollLeft, positionDiff,showLeftIcon, showRightIcon]);



    

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
    <button className={`${showLeftIcon?'': 'opacity-0'}`}><FaChevronCircleLeft className=' left-[-22px]  slider-icon  ' /></button>
      <section className={`flex gap-4 overflow-x-hidden   whitespace-nowrap ${isDragStart ? 'cursor-grab scroll-auto': 'cursor-pointer scroll-smooth '} `} ref={carouselRef}>
                 {
                  items.map((item, idx)=>{
                    return <ListingBox img={item.img} idx={item.key}/>
                  })
                 }

      </section>
      <button className={`${showRightIcon?'': 'opacity-0'}`}><FaChevronCircleRight className=' right-[-22px] slider-icon '/></button>
 </section>
  )
}

export default ListingCarousel
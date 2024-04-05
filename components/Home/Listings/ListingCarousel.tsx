"use client"
import { ListingBox } from '@/components/Elements/ShapedBox'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react';

interface CarouselProps {
    items: [{img:'',key:number}]; 
  }

const ListingCarousel:React.FC<CarouselProps> = ({items}) => {

    const carouselRef = useRef<HTMLDivElement>(document.createElement('div'));
    const radioRef = useRef<HTMLDivElement>(document.createElement('div'));
    const [isDragStart, setIsDragStart] = useState(false);
    const [prevPageX, setPrevPageX] = useState(0);
    const [prevScrollLeft, setPrevScrollLeft] = useState(0);
    const [positionDiff, setPositionDiff] = useState(0);
    const [showLeftIcon, setShowLeftIcon] = useState(false)
    const [showRightIcon, setShowRightIcon] = useState(true)

   
    useEffect(() => {
        const carousel = carouselRef.current;
        const radioDiv = radioRef.current
        const leftButton = carousel.previousElementSibling as HTMLElement;
        const leftButtonChild =leftButton.firstChild as HTMLElement
        const rightButton = carousel.nextElementSibling as HTMLElement;
        const rightButtonChild = rightButton.firstChild as HTMLElement
        const firstImgWidth = carousel.firstElementChild?.clientWidth as number + 16
        const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
        const radioDivArray = radioDiv.childNodes


        radioDivArray.forEach((_item, idx) => {
            const Item = _item as HTMLElement;
            const scrollPosition = carousel.scrollLeft;
            const scrollWidthDiv = carousel.scrollWidth/6
        
            let pageIndex;

            if (scrollPosition >= 0 &&  scrollPosition <= scrollWidthDiv * 1) {
                pageIndex = 0; 
            } else if (scrollPosition > scrollWidthDiv * 5 || scrollPosition == scrollWidth){
                pageIndex = 5;
            } else  if  (scrollPosition > scrollWidthDiv * 1 && scrollPosition <= scrollWidthDiv * 2  ){
                pageIndex = 1; 
            } else if (scrollPosition > scrollWidthDiv * 2 && scrollPosition <= scrollWidthDiv * 3  ){
                pageIndex = 2;
            } else if (scrollPosition > scrollWidthDiv * 3 && scrollPosition <= scrollWidthDiv * 4  ){
                pageIndex = 3;
            } else if (scrollPosition > scrollWidthDiv * 4 && scrollPosition <= scrollWidthDiv * 5  ){
                pageIndex = 4;
            } 
    
            Item.classList.toggle('bg-[#7e9999]', idx === pageIndex);
            Item.classList.toggle('bg-[#c3d4cc]', idx !== pageIndex);
        });
        

    

        const updateIconVisibility = () => {
            setShowLeftIcon(carousel.scrollLeft !== 0);
            setShowRightIcon(carousel.scrollLeft !== scrollWidth);
        };
        
        const leftButtonFunc = () =>{
                 carousel.scrollLeft += -firstImgWidth
                 leftButtonChild.classList.add('slider-icon-active');
                 setTimeout(() => { leftButtonChild.classList.remove('slider-icon-active');}, 100);
                 setTimeout(()=>updateIconVisibility(),60 )
        }

        const rightButtonFunc = () =>{
            carousel.scrollLeft += firstImgWidth
            rightButtonChild.classList.add('slider-icon-active');
            setTimeout(() => { rightButtonChild.classList.remove('slider-icon-active');}, 100);
            setTimeout(()=>updateIconVisibility(),60 )
   }

        leftButton.addEventListener('click',leftButtonFunc)
        rightButton.addEventListener('click',rightButtonFunc)

        const autoSlide = () =>{
        if (
              carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 ||
              carousel.scrollLeft <= 0
            )
              return;
            setPositionDiff(Math.abs(positionDiff))
                // getting difference value that needs to add or reduce from carousel left to take middle img center
            const valDifference = firstImgWidth - positionDiff;
            if (carousel.scrollLeft > prevScrollLeft) {
              return (
                (carousel.scrollLeft +=
                  positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff),
               setTimeout(()=>updateIconVisibility(),60 )
              );
            }
      
            carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
            setTimeout(()=>updateIconVisibility(),60 )
          };
    

           
        const dragStart = (e:MouseEvent | TouchEvent) =>{
            setIsDragStart(true)
            const pageX = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX;
            setPrevPageX(pageX)
            setPrevScrollLeft(carousel.scrollLeft)
        }
        const dragStop = () =>{
            setIsDragStart(false)
            autoSlide();
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

  return (
    <section className='mt-20 relative' >
    <button className={`${showLeftIcon?'': 'opacity-0'}  max-sm:hidden`}><FaChevronCircleLeft className=' left-[-22px]  slider-icon  ' /></button>
      <section className={`flex gap-4 overflow-x-hidden   whitespace-nowrap ${isDragStart ? 'cursor-grab scroll-auto': 'cursor-pointer scroll-smooth '} `} ref={carouselRef}>
                 {
                  items.map((item, _idx)=>{
                    return <ListingBox img={item.img} idx={item.key}/>
                  })
                 }

      </section>
      <button className={`${showRightIcon?'': 'opacity-0'} max-sm:hidden`}><FaChevronCircleRight className=' right-[-22px] slider-icon '/></button>
      <section className="  div-center gap-1 w-full mt-10" ref={radioRef}>
      {
                  items.map((_item, idx)=>{
                    console.log(idx)
                    return  <div className="w-[25px] h-[10px] rounded-full " key={idx}></div>
                  })
                 } 
      </section>
 </section>
  )
}

export default ListingCarousel
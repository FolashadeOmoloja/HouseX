import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';

interface IProp {
    background?: string;
    text?: string;
    title?: string;
  }

  interface IBox {
      img?:string
      idx?:number
  } 

  interface IListing{

  }
  

const ShapedBox:React.FC<IProp> = ({background='#c3d4cc',text='satisfied customers',title="17k+"}) => {
  return (
    <div className={`h-[270px] w-[230px] bg-[${background}] relative slanted-div  rounded-2xl  z-1`}>
           <div className={`absolute top-0 right-0  w-[80px] h-[80px] border-t-[80px] border-t-white border-l-[80px] border-l-[#e5e7eb] `}></div>
           <div className={`absolute bottom-0 left-0 w-[80px] h-[80px] border-b-[80px] border-b-white border-r-[80px] border-r-[#e5e7eb]`}></div>
           <div className='slanted-div2'></div>
           <div className={`bg-[${background}] h-[70px] w-4 rounded-[20px] rotate-[135deg] z-10 absolute bottom-[-4px] left-[15px]`}></div>
           <div className='text-contents div-center h-full flex-col'>
            <span className='font-semibold text-3xl'>{title}</span>
            <span>{text}</span>
       
           </div>
  </div>
  )
}

export default ShapedBox


export const ImgShapeBox:React.FC<IBox> = ({img='house-img1.png'}) => {
  return (
    <div className='headersection-gradient xxsm:h-[450px] h-[320px] w-full rounded-[20px] relative'>
        <img src={img} alt="img" className="w-full h-full rounded-[20px]" />
         <div className="right-angle-triangle absolute left-0 top-0 border-b-[100px] border-solid border-b-[#f3f6fd]"> </div>   
         <div className="right-angle-bottom-triangle absolute bottom-0 right-0"> </div> 
         <div  className='w-0 h-0 border-l-[130px] border-l-transparent border-b-[130px] border-b-[#7e9999]  rounded-br-[20px] absolute bottom-0 right-0'>
         </div> 
         <div className='w-0 h-0 border-l-[115px] border-l-transparent border-b-[115px] border-b-[#f3f6fd] rounded-br-[20px] absolute bottom-[4px] right-[4.7px] '>
           <FaArrowRight className='text-[#7e9999] absolute right-[25px] top-[59px]'/>
         </div>
 </div>
  )
}


export const ListingBox:React.FC<IBox> = ({img='circle2.jpg', idx}) => {
  return (
    <div className='h-[400px] sxlg:min-w-[32.5%] sm:min-w-[50%] min-w-[100%] relative rounded-[10px]' key={idx} draggable="false">
    <div className="right-angle-triangle absolute right-0 top-0 rotate-[90deg] border-b-white border-b-[100px] border-solid "> </div> 
      <img src={img} alt="listing"  className='w-full h-full rounded-[10px]  object-cover' draggable="false"/>
      <div className='w-[130px] h-[35px] bg-[#f3f6fdda] text-sm div-center skew-x-[30deg] rounded-lg relative bottom-1/2 mx-auto transition-all hover:headersection-gradient hover:text-white cursor-pointer'><span className='skew-x-[-30deg]'>View Details</span></div>    
      <div className="right-angle-triangle absolute right-0 top-0 rotate-[90deg] border-b-white border-b-[100px] border-solid "> </div> 
      <div className="w-0 h-0 border-l-[100px] border-l-transparent absolute left-0 bottom-0 rotate-[90deg] border-b-white border-b-[100px] border-solid "> </div> 
      <div className={`headersection-gradient  h-[50px] w-4 rounded-[20px] rotate-[135deg] absolute bottom-[10px] left-[25px]`}></div>
    </div>
  )
}
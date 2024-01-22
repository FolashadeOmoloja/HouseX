import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';

interface IProp {
    background?: string;
    text?: string;
    title?: string;
  }

  interface IBox {
      img?:string
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
    <div className='headersection-gradient h-[450px] w-[400px] rounded-[20px] relative'>
        <img src={img} alt="img" className="w-full h-full rounded-[20px]" />
         <div className="right-angle-triangle absolute left-0 top-0"> </div>   
         <div className="right-angle-bottom-triangle absolute bottom-0 right-0"> </div> 
         <div  className='w-0 h-0 border-l-[130px] border-l-transparent border-b-[130px] border-b-[#7e9999]  rounded-br-[20px] absolute bottom-0 right-0'>
         </div> 
         <div className='w-0 h-0 border-l-[115px] border-l-transparent border-b-[115px] border-b-[#f3f6fd] rounded-br-[20px] absolute bottom-[4px] right-[4.7px] '>
           <FaArrowRight className='text-[#7e9999] absolute right-[25px] top-[59px]'/>
         </div>
 </div>
  )
}

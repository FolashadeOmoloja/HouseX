import React from 'react'

interface IProp {
    background?: string;
    text?: string;
    title?: string;
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
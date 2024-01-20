import React from 'react'

const Features = () => {
  return (
   <main className='maxWidthWrapper bg-[#f3f6fd]'>
        <h3 className='text-[40px] max-slg:text-3xl  max-xsm:text-2xl'>Looking to rent or lease an apartment? <br className='max-xslg:hidden' /> We’ve got you covered.</h3>
        <section className='mt-12 flex gap-5'>
                  <div className=' uppercase flex flex-col gap-7 text-[17px]'>
                    
                     <div className='pl-3 border-l-[#7e9999] border-l-4 hover:text-[#7e9999] cursor-pointer transition'>For Renters</div>
                     <div className='pl-3 border-l-[#7e9999] border-l-4 hover:text-[#7e9999] cursor-pointer transition'>For Sellers</div>
                  </div>
                  <section>
                         <div className='bg-red-300 h-[450px] w-[400px] rounded-[20px] relative'>
                         <div className="right-angle-triangle absolute left-0 top-0"> </div>   
                         <div className="right-angle-bottom-triangle absolute bottom-0 right-0"> </div>  
                         </div>
                       
                        
                  </section>
        </section>
      
   </main>
  )
}

export default Features
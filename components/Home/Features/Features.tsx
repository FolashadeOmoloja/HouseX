import { ImgShapeBox } from "@/components/Elements/ShapedBox";


const Features = () => {
  return (
   <main className='maxWidthWrapper bg-[#f3f6fd] text-[#4b5456]'>
        <h3 className='text-[40px] max-slg:text-3xl  max-xsm:text-2xl'>Looking to rent or lease an apartment? <br className='max-xslg:hidden' /> We’ve got you covered.</h3>
        <section className='mt-12 flex '>
                  <div className=' uppercase flex flex-col gap-7 text-[17px] basis-[20%] '>
                    
                     <div className='pl-3 border-l-[#7e9999] border-l-4 hover:text-[#7e9999] cursor-pointer transition'>For Renters</div>
                     <div className='pl-3 border-l-[#7e9999] border-l-4 hover:text-[#7e9999] cursor-pointer transition'>For Sellers</div>
                  </div>
                  <section className="flex justify-between basis-[80%] ">
                      <div>
                          <ImgShapeBox/>
                      </div>
                      <ImgShapeBox img="tenets.png"/>
                  </section>
        </section>
      
   </main>
  )
}

export default Features
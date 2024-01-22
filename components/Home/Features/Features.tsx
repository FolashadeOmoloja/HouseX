import { ImgShapeBox } from "@/components/Elements/ShapedBox";
import { CgMenuGridR } from "react-icons/cg";

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
                      <div className="w-[400px]">
                          <ImgShapeBox/>
                          <div className="mt-8">
                             <div className="flex items-center gap-3 mb-2">
                                 <CgMenuGridR className='text-[#7e9999]'/>
                                 <span>MarketPlace</span>
                             </div>
                             <p className="text-sm">Effortless apartment hunting in Nigeria! Explore our curated listings, pick your perfect space, and enjoy flexible payment options—monthly, quarterly, or annually. No inspections, agency fees, or legal hassles. Simply pay and move in!</p>
                          </div>
                      </div>
                        <div className="w-[400px]">
                            <ImgShapeBox img="tenets.png"/>
                        </div>
                      
                  </section>
        </section>
      
   </main>
  )
}

export default Features
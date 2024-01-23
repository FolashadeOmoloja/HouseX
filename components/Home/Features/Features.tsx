import { ImgShapeBox } from "@/components/Elements/ShapedBox";
import { CgMenuGridR } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";

const Features = () => {
  return (
   <main className='maxWidthWrapper bg-[#f3f6fd] text-[#4b5456] max-xlg:text-center'>
        <h3 className='text-[40px] max-slg:text-3xl  max-xsm:text-2xl'>Looking to rent or lease an apartment? <br className='max-xslg:hidden' /> We’ve got you covered.</h3>
        <section className='mt-12 flex relative max-xlg:flex-col'>
                  <div className='uppercase flex xlg:flex-col xlg:gap-7 gap-4  text-[17px] basis-[20%] mx-auto max-xlg:mb-10 max-xlg:border-[#7e9999] max-xlg:border max-xlg:rounded-3xl' >
                     <div className='features-switch features-switch-active'>For Renters</div>
                     <div className='features-switch '>For Sellers</div>
                  </div>
                      <section className="flex xslg:justify-between basis-[80%] flex-wrap justify-center max-xslg:gap-8">
                          <div className="w-[400px]">
                              <ImgShapeBox/>
                              <div className="mt-8">
                                 <div className="features-header">
                                     <CgMenuGridR className='text-[#7e9999]'/>
                                     <span>MarketPlace</span>
                                 </div>
                                 <p className="text-sm ">Effortless apartment hunting! Explore our curated listings, pick your perfect space, and enjoy flexible payment options. No agency fees or legal hassles. Simply pay and move in!</p>
                              </div>
                          </div>
                            <div className="w-[400px]">
                                <ImgShapeBox img="tenets.png"/>
                                <div className="mt-8">
                                 <div className="features-header">
                                     <FaUserFriends className='text-[#7e9999]'/>
                                     <span>Roomies Pairing</span>
                                 </div>
                                 <p className="text-sm ">Simplify apartment hunting in Nigeria! Our system pairs you with potential roommates based on shared interests and ideal fits, easing the burden of rents.</p>
                              </div>
                            </div>
                          
                      </section>
                  </section>
   </main>
  )
}

export default Features
"use client"
import { useState } from "react";
import ForSellers from "./ForSellers";
import ForRenters from "./ForRenters";
import Login from "../Header/Login";

const Features = () => {
    const [forRenters, setForRenters] = useState(true)
  return (
   <main className='maxWidthWrapper bg-[#f3f6fd] text-[#4b5456] max-xlg:text-center'>
        <h3 className='text-[40px] max-slg:text-3xl  max-xsm:text-2xl'>Looking to rent or lease an apartment? <br className='max-xslg:hidden' /> We’ve got you covered.</h3>
        <section className='mt-12 flex relative max-xlg:flex-col xlg:gap-10'>
                  <div className='uppercase flex xlg:flex-col xlg:gap-7 gap-4  text-[17px] basis-[20%] mx-auto max-xlg:mb-10 max-xlg:border-[#7e9999] max-xlg:border max-xlg:rounded-3xl' >
                     <div className='features-switch features-switch-active'>For Renters</div>
                     <div className='features-switch '>For Sellers</div>
                  </div>
                      <section className=" basis-[80%] ">
                          {
                          forRenters? (
                           <ForRenters/>
                          ): (
                             <ForSellers/>
                          )
                          
                        }
                      </section>
        </section>
        <div className=" mt-16">
                    <Login display="hidden" cta="Get Started" justifyEnd={false} width="md:w-[300px] w-full"/>
        </div>
   </main>
  )
}

export default Features
import { GoArrowUpRight } from "react-icons/go"
import ShapedBox from '../../Elements/ShapedBox'

const About = () => {
  return (
    <main className='maxWidthWrapper bg-white'>
        <section className='flex justify-between items-end max-slg:flex-col max-slg:text-center max-slg:items-center max-slg:gap-6'>
            <h2 className='basis-3/5 text-[40px] max-slg:text-3xl  max-xsm:text-2xl'>Your Trusted Real Estate <br className='max-xslg:hidden' /> Marketplace</h2>
            <p className=' text-[#4b5456] basis-2/5'>Your cutting-edge real estate marketplace that offers a seamless and immersive experience for finding your dream home. A safespace for Landlords to enlist their properties and verify potential buyers or renters. </p>
        </section>
        <section className='flex justify-between mt-14 '>
             <section className='flex gap-5 flex-wrap basis-1/2'>
                 <ShapedBox/>
                 <div className={`h-[270px] w-[230px] bg-[#4b5456] relative slanted-div  rounded-2xl  z-1`}>
                <div className={`absolute top-0 right-0  w-[80px] h-[80px] border-t-[80px] border-t-white border-l-[80px] border-l-[#4b5456] `}></div>
                <div className={`absolute bottom-0 left-0 w-[80px] h-[80px] border-b-[80px] border-b-white border-r-[80px] border-r-[#4b5456]`}></div>
                <div className='slanted-div2'></div>
                <div className={`bg-[#4b5456] h-[70px] w-4 rounded-[20px] rotate-[135deg] z-10 absolute bottom-[-4px] left-[15px]`}></div>
                <div className='text-contents div-center h-full flex-col text-white'>
                   <span className='font-semibold text-3xl'>10+</span>
                   <span>Years of Experience</span>
                </div>
             </div>
                 <ShapedBox title='7+' text='Awards Won'/>
                 <ShapedBox title='13K+' text='Properties collection'/>
             </section>
             <article className='basis-1/2 flex bg-[#c3d4cc] p-7 rounded-[20px] h-[400px] self-end gap-3'>
              <div className='basis-1/2  text-[#4b5456] flex flex-col justify-between'>
                <p>We have witnessed the ever-evolving landscape of the real estate market and become a trusted partner to thousands of clients</p>
                <p>Pioneering real estate leaders, trusted for personalized service and innovation.</p>
                <div className='w-[120px] h-[120px] bg-[#7e9999] rounded-full text-white div-center relative'>
                    <div className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlLang="en" viewBox="0 0 300 300" width={200} className="">
                            <title>Contact Us</title>
                            <defs>
                               <path id="smallTextCircle" d="M150,200 a75,75 0 0,1 0,-150a75,75 0 0,1 0,150Z" transform="rotate (12,150,150)" />
                            </defs>
                            <g className="smallTextCircle text-white">
                            <text textLength='470' fontSize={14}  className="text-white">
                               <textPath xlinkHref="#smallTextCircle" aria-label="Contact us" textLength={470} className="text-white">
                                   Contact Us | Contact Us | 
                               </textPath>
                            </text>
                            </g>
                        </svg>
                    </div>
                     <span className="text-4xl"><GoArrowUpRight /></span>
                     
                </div>
                <div>
                </div>
              </div>
             <section className="basis-3/5">
                 <div className={`h-full w-full bg-[#4b5456] relative   rounded-2xl  z-1`}>
                       <div className={`absolute top-0 right-0  w-[80px] h-[80px] border-t-[80px] border-t-[#c3d4cc] border-l-[80px] border-l-[#4b5456] `}></div>
                       <div className={`absolute bottom-0 left-0 w-[80px] h-[80px] border-b-[80px] border-b-[#c3d4cc] border-r-[80px] border-r-[#4b5456]`}></div>
                      
    
                      <img src="House1.jpg" alt="img" className="h-full" />
                 </div>
             </section>
             </article>
        </section>
    </main>
  )
}

export default About
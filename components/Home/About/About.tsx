import { GoArrowUpRight } from "react-icons/go"
import ShapedBox from '../../Elements/ShapedBox'
import Login from "../Header/Login"

const About = () => {
  return (
    <main className='maxWidthWrapper bg-white'>
        <section className='flex justify-between items-end max-slg:flex-col max-slg:text-center max-slg:items-center max-slg:gap-6'>
            <h2 className='basis-3/5 text-[40px] max-slg:text-3xl  max-xsm:text-2xl'>Your Trusted Real Estate <br className='max-xslg:hidden' /> Marketplace</h2>
            <p className=' text-[#4b5456] basis-2/5'>Your cutting-edge real estate marketplace that offers a seamless and immersive experience for finding your dream home. A safespace for Landlords to enlist their properties and verify potential buyers or renters. </p>
        </section>
        <section className='flex justify-between mt-14 max-xlg:flex-col max-xlg:gap-16'>
             <section className='flex gap-5 xlg:flex-wrap max-slg:flex-wrap max-slg:justify-center basis-1/2'>
                 <ShapedBox/>
                 <div className={`h-[270px] w-[230px] bg-[#4b5456] relative slanted-div  rounded-2xl  z-1`}>
                <div className={`absolute top-0 right-0  w-[80px] h-[80px] border-t-[80px] border-t-white border-l-[80px] border-l-[#c3d4cc] `}></div>
                <div className={`absolute bottom-0 left-0 w-[80px] h-[80px] border-b-[80px] border-b-white border-r-[80px] border-r-[#c3d4cc]`}></div>
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
             <article className='basis-1/2 flex bg-[#c3d4cc] p-7 max-xsm:p-4 rounded-[20px] h-[400px] self-end gap-3 max-sm:flex-col'>
              <div className='basis-1/2  text-[#4b5456] flex flex-col justify-between max-sm:text-center max-sm:gap-5'>
                <p>We have witnessed the ever-evolving landscape of the real estate market and become a trusted partner to thousands of clients</p>
                <p>Pioneering real estate leaders, trusted for personalized service and innovation.</p>
                <div className='w-[120px] h-[120px] bg-[#7e9999] rounded-full text-white div-center relative max-sm:hidden'>
                    <div className="absolute top-[-15px] right-[-27px]">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlLang="en" viewBox="0 0 300 300" width={180}>
                            <title>Contact Us</title>
                            <defs>
                               <path id="smallTextCircle" d="M150,200 a75,75 0 0,1 0,-150a75,75 0 0,1 0,150Z" transform="rotate (12,150,150)" />
                            </defs>
                            <g className="smallTextCircle">
                            <text textLength='470' fontSize={14} fill="white"  fontWeight={'bold'}>
                               <textPath xlinkHref="#smallTextCircle" aria-label="Contact us" textLength={470} >
                                   Contact Us - Contact Us -&nbsp; 
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
                       <div className={`bg-[#4b5456] h-[70px] w-4 rounded-[20px] rotate-[135deg] z-10 absolute bottom-[-4px] left-[15px]`}></div>
                      <img src="House1.jpg" alt="img" className="h-full" />
                 </div>
             </section>
             <div className="sm:hidden mt-5">
                    <Login display="hidden" justifyEnd={false}/>
             </div>
             </article>
        </section>
    </main>
  )
}

export default About
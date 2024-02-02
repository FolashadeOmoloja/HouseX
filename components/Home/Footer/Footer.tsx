import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
     <footer className='bg-[#f3f6fd] px-4 mt-24 text-[#4b5456] pt-20'>
            <main className='bg-white rounded-3xl px-2.5 md:px-20 md:py-10 py-2.5 mx-auto h-[400px] flex justify-between'>
                <section className='flex flex-col h-full justify-between basis-1/2'>
                      <div>
                          <span className='text-[24px] font-bold flex items-center '>H<img src="home.png" alt="" className='w-5 h-5 mb-[2px]'/>useX</span>
                          <p className='text-[32px] mt-8 text-transparent bg-clip-text headersection-gradient'>YOUR BEST <br /> REAL ESTATE <br /> MARKETPLACE</p>
                          </div>
                      <span className='flex items-center'><MdCopyright />2024</span>
                </section>
                <section className="basis-1/2 flex flex-col justify-between">
                      <div className="flex justify-between">
                         <ul className="flex flex-col gap-3">
                            <li className="cursor-pointer">Services</li>
                            <li className="cursor-pointer">Team</li>
                            <li className="cursor-pointer">Company</li>
                         </ul>
                         <ul className="flex flex-col gap-3">
                            <li className="cursor-pointer">Contact</li>
                            <li className="cursor-pointer">Location</li>
                         </ul>
                         <ul className="flex flex-col gap-3">
                            <li className="cursor-pointer">About</li>
                            <li className="cursor-pointer">Policy</li>
                            <li className="cursor-pointer">Headquarters</li>
                         </ul>
                      </div>
                      <div>
                          <p className="text-xs text-slate-500">Sign up for our newsletter</p>
                          <form className="flex mt-3">
                             <input type="email" name="newsletter" id="newsletter" placeholder="YOUR EMAIL" className="outline-none h-12 bg-[#f3f6fd] px-3 w-full  rounded-l-lg basis-4/5"/>
                             <button className="pl-4 pr-8 headersection-gradient text-white relative rounded-l-lg basis-1/5 transition hover:text-[#4b5456]">SignUp
                             <div className="w-0 h-0 border-l-transparent border-l-[20px] absolute right-0 top-0 rotate-[270deg] border-b-white border-b-[20px] border-solid "> </div> 
                             </button>
                          </form>
                      </div>
                </section>
            </main>

     </footer>
  )
}

export default Footer
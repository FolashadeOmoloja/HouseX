import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
     <footer className='bg-[#f3f6fd] px-4 mt-24 text-[#4b5456] pt-20'>
            <main className='bg-white rounded-3xl px-2.5 md:px-20 md:py-10 py-2.5 mx-auto h-[400px] flex justify-between'>
                <section className='flex flex-col h-full justify-between'>
                      <div>
                          <span className='text-[24px] font-bold flex items-center '>H<img src="home.png" alt="" className='w-5 h-5 mb-[2px]'/>useX</span>
                          <p className='text-[32px] mt-8 text-transparent bg-clip-text headersection-gradient'>YOUR BEST <br /> REAL ESTATE <br /> MARKETPLACE</p>
                          </div>
                      <span className='flex items-center'><MdCopyright />2024</span>
                </section>
                <section>
                      <div className="flex">
                         <ul>
                            <li>Services</li>
                            <li>Team</li>
                            <li>Company</li>
                         </ul>
                         <ul>
                            <li>Contact</li>
                            <li>Location</li>
                         </ul>
                         <ul>
                            <li>About</li>
                            <li>Policy</li>
                            <li>Headquarters</li>
                         </ul>
                      </div>
                </section>
            </main>

     </footer>
  )
}

export default Footer
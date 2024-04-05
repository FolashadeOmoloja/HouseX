'use client'
import  {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import Login from '../Header/Login'



const FAQ = () => {
  const [faqs, setfaqs] = useState([
    {id:0, 
    open: false, 
    p:'What sets HouseX apart from other real estate marketplaces?',
    ans: 'HouseX distinguishes itself with its exceptional housing options, seamless co-tenant pairing services, transparent pricing without hidden charges, and efficient tenant management systems.'
  },
    {id:1, 
    open: false, 
    p:'Are there diverse housing options available on HouseX?',
    ans: "Absolutely! HouseX offers a wide range of housing options to cater to various preferences and needs, ensuring you find your ideal living space."
  
  },
    {id:2, 
    open: false, 
    p:"How does HouseX facilitate co-tenant pairing?",
    ans: 'HouseX employs advanced pairing systems to help you find compatible roommates or co-tenants, ensuring harmonious living arrangements.'
  },
    {id:3, 
    open: false, 
    p:'Does HouseX guarantee transparent pricing without hidden charges?',
    ans: 'Yes, HouseX is committed to transparent pricing, providing clarity and assurance to our users without any hidden fees.'
  
  }, 
    {id:4, 
    open: false, 
    p:'What tenant management systems does HouseX offer?',
    ans: 'HouseX provides intuitive tenant management systems to streamline communication, rent payments, and maintenance requests, ensuring a hassle-free tenancy experience.'
  
  },
    {id:5, 
    open: false, 
    p:'Can I trust HouseX for secure and convenient housing solutions?',
    ans: 'Absolutely! HouseX prioritizes secure and convenient housing solutions, providing peace of mind to all our users.'
     
  },
  
  ])
  
  const toogleFAQ = (index: number) =>{
    setfaqs(faqs.map((faq, i) =>{
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }
  
      return faq;
    }))
    }

  return (
    <main className='maxWidthWrapper bg-white  text-[#4b5456] max-xlg:text-center'>
        <section className='flex justify-between items-end max-slg:flex-col max-slg:text-center max-slg:items-center max-slg:gap-6'>
            <h2 className='basis-3/5 text-[40px] max-slg:text-3xl  max-xsm:text-2xl text-transparent bg-clip-text headersection-gradient'>Frequently Asked Questions</h2>
            <p className=' text-[#4b5456] basis-2/5'>Find swift resolutions to any inquiries or uncertainties you have regarding our services. Whether you're a member, host, or simply visiting, we're here with the answers you need. </p>
        </section>
        <section className="mt-[43px]">
              {
                  faqs.map(({id,open,p, ans})=>{
                      return(
                        
                        <div className="border-b-[1px] pb-[13px] pt-[25px] border-[#7e9999] text-sm " key={id}>
                        <div className= 'flex justify justify-between '>
                        <p>{p}</p>
                         <span className='text-[#7e9999] cursor-pointer flex flex-col max-sm:justify-center' onClick = {() => toogleFAQ(id)}>{open? <AiOutlineMinus/>: <AiOutlinePlus/>}</span>
                        </div>
                        <div className={` ${(open ? `block` :'hidden')} mt-3`} >
                          <p>{ans}</p>
                        </div>
                    
                        
                      </div>
              
                      )
                  })
              }
     </section>
     <div className=" mt-20">
              <Login display="hidden" cta="Get Started" justifyEnd={false} width="md:w-[300px] w-full"/>
        </div>
  </main>
  )
}

export default FAQ
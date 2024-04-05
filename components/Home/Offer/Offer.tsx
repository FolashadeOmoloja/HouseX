import { BsFillHouseGearFill, BsFillHousesFill, BsFillPeopleFill } from "react-icons/bs";
import { MdManageHistory, MdOutlineMoneyOff } from "react-icons/md";
import { RiCommunityFill } from "react-icons/ri";

const items = [
    {
        icon: <BsFillHousesFill />,
        title: 'Great Housing Options',
        txt: 'Explore a wide range of housing options, from apartments to single-family homes, tailored to your preferences and needs.'
    },
    {
        icon: <BsFillPeopleFill />,
        title: 'Co-Tenant Pairing',
        txt: 'Find the perfect roommate or co-tenant with our advanced pairing system, ensuring compatibility and harmony in your living space.'
    },
    {
        icon: <MdOutlineMoneyOff />,
        title: 'No Hidden Charges',
        txt: 'Transparent pricing with no hidden charges or unexpected fees. What you see is what you get, ensuring peace of mind in your housing search.'
    },
    {
        icon: <MdManageHistory />,
        title: 'Tenant Management Systems',
        txt: 'Effortlessly manage your tenancy with our intuitive tenant management systems, enabling seamless communication, rent payments, and maintenance requests.'
    },
    {
        icon: <RiCommunityFill />        ,
        title: 'Community Engagement',
        txt: 'Join a vibrant community of tenants and connect with fellow residents through social events, forums, and neighborhood initiatives.'
    },
    {
        icon: <BsFillHouseGearFill />,
        title: 'Secure Tenancy',
        txt: 'Enjoy secure tenancy with robust legal protections and support services, ensuring your rights as a tenant are upheld throughout your lease.'
    }
];
const Offer = () => {
  return (
    <section className=" maxWidthWrapper bg-[#f3f6fd] text-[#4b5456] max-xlg:text-center">
                 <h2 className='text-[40px] max-slg:text-3xl mb-5 text-center '>What we have to offer </h2>
                 <p className="text-center mb-10 max-md:mb-6  max-sm:text-sm">Choosing us as your real estate go to comes with amazing benefits, <br className="max-sm:hidden" /> this is what makes us stand out as we strive to offer you the very best.</p>
         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {
                items.map((item,index)=>{
                    return(
                        <div key={index} className="text-sm col-span-1 mt-4 flex flex-col max-md:items-center max-md:text-center">
                            <div className="flex gap-2 mb-3 items-center">
                                <div className="h-14 w-14 rounded-full bg-white text-[24px] div-center text-[#7e9999] shadow-md">{item.icon}</div>
                                <span className="text-[#414040] text-[16px] font-semibold">{item.title}</span>
                            </div>
                            <p className="text-[#565252]">{item.txt}</p>
                        </div>
                    )
                })
              }
         </section>



    </section>
  )
}

export default Offer
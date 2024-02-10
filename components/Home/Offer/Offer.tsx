
const items = [
    {
        image: 'housing-options.svg',
        title: 'Great Housing Options',
        txt: 'Explore a wide range of housing options, from apartments to single-family homes, tailored to your preferences and needs.'
    },
    {
        image: 'co-tenant-pairing.svg',
        title: 'Co-Tenant Pairing',
        txt: 'Find the perfect roommate or co-tenant with our advanced pairing system, ensuring compatibility and harmony in your living space.'
    },
    {
        image: 'no-hidden-charges.svg',
        title: 'No Hidden Charges',
        txt: 'Transparent pricing with no hidden charges or unexpected fees. What you see is what you get, ensuring peace of mind in your housing search.'
    },
    {
        image: 'tenant-management.svg',
        title: 'Tenant Management Systems',
        txt: 'Effortlessly manage your tenancy with our intuitive tenant management systems, enabling seamless communication, rent payments, and maintenance requests.'
    },
    {
        image: 'community-engagement.svg',
        title: 'Community Engagement',
        txt: 'Join a vibrant community of tenants and connect with fellow residents through social events, forums, and neighborhood initiatives.'
    },
    {
        image: 'secure-tenancy.svg',
        title: 'Secure Tenancy',
        txt: 'Enjoy secure tenancy with robust legal protections and support services, ensuring your rights as a tenant are upheld throughout your lease.'
    }
];
const Offer = () => {
  return (
    <section className=" maxWidthWrapper bg-[#f3f6fd] text-[#4b5456] max-xlg:text-center">
         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {
                items.map((item,index)=>{
                    return(
                        <div key={index} className="text-sm col-span-1 mt-4 flex flex-col max-md:items-center max-md:text-center">
                            <div className="flex gap-2 mb-3 items-center">
                                <div><img src={item.image} alt="img" /></div>
                                <span className="text-[#333333] font-semibold">{item.title}</span>
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
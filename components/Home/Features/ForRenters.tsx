import { ImgShapeBox } from "@/components/Elements/ShapedBox";
import { CgMenuGridR } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";


const ForRenters = () => {
  return (
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
  )
}

export default ForRenters
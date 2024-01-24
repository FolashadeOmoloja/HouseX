import { ImgShapeBox } from "@/components/Elements/ShapedBox";
import { BsHousesFill } from "react-icons/bs"
import { FaHandshakeAngle } from "react-icons/fa6";

const ForSellers = () => {
  return (
    <section className="flex xslg:justify-between  flex-wrap justify-center max-xslg:gap-8">
    <div className="w-[400px]">
        <ImgShapeBox img="sellers1.jpg"/>
        <div className="mt-8">
           <div className="features-header">
               <BsHousesFill className='text-[#7e9999]'/>
               <span>Easy Listing</span>
           </div>
           <p className="text-sm ">List your properties effortlessly on the HouseX marketplace, where a seamless process guarantees you get full value for your money. Enjoy a hassle-free and safe experience, as you relax while we match you to a potential buyer.</p>
        </div>
    </div>
      <div className="w-[400px]">
          <ImgShapeBox img="seller2.jpg"/>
          <div className="mt-8">
           <div className="features-header">
               <FaHandshakeAngle  className='text-[#7e9999]'/>
               <span>Easy verification</span>
           </div>
           <p className="text-sm ">HouseX simplifies property transactions by verifying potential renters and buyers, streamlining purchase tracking. Additionally, it offers efficient renter management to ensure a seamless property experience</p>
        </div>
      </div>
    
</section>
  )
}

export default ForSellers
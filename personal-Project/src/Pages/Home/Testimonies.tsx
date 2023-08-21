import { BsQuestionCircle, BsBagPlusFill } from "react-icons/bs";
import { IoStorefrontOutline } from "react-icons/io5";
import { PiSealCheckBold } from "react-icons/pi";

const Testimonies = () => {
  return (
    <div className=" w-[100%] gap-3 flex mt-[30px] flex-wrap justify-center items-center  max-sm:justify-normal">
      {/* card */}
      <div className="w-[300px] h-[100px] bg-white border-[black] border-r-2  flex items-center justify-start m-[20px] max-sm:border-none">
        <div className="mr-3 text-[60px]  ">
          <IoStorefrontOutline />
        </div>
        <div>
          <div className="font-bold">Best Prices </div>
          <div className="text-[#cccbcb]">Affordable</div>
        </div>
      </div>
      {/* card2 */}
      <div className="w-[300px] h-[100px] bg-white border-[black] border-r-2  flex items-center justify-start m-[20px] max-sm:border-none md:border-none">
        <div className="text-[60px] mr-3 ">
          <PiSealCheckBold />
        </div>
        <div>
          <div className="font-bold">Fast Shippment </div>
          <div className="text-[#cccbcb]">Express</div>
        </div>
      </div>
      {/* card 3 */}
      <div className="w-[300px] h-[100px] bg-white border-[black] border-r-2  flex items-center justify-start m-[20px] max-sm:border-none">
        <div className="mr-3 text-[60px] ">
          <BsBagPlusFill />
        </div>
        <div>
          <div className="font-bold">Buyers Protection </div>
          <div className="text-[#cccbcb]">Guarantee</div>
        </div>
      </div>
      {/* card 4 */}
      <div className="w-[300px] m-[20px] h-[100px] bg-white  flex items-center justify-start max-sm:border-none">
        <div className="text-[60px] mr-3">
          <BsQuestionCircle />
        </div>
        <div>
          <div className="font-bold">Live Support </div>
          <div className="text-[#cccbcb]">Online</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;

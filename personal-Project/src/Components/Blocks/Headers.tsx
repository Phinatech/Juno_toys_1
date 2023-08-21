import React from "react";
import pic from "../../assets/logo.png";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { BsSearch } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

const Headers = () => {
  const [show, setShow] = React.useState(false);

  const toggle = () => {
    setShow(!show);
  };
  return (
    <div className="w-full h-[90px]  flex justify-center shadow relative">
      <div className="w-[90%] flex justify-between items-center">
        <div className="">
          <img src={pic} alt="" className="h-[70px] md:h-[100%]" />
        </div>
        <div className="hidden  text-lg font-semibold md:flex">
          <div className="mr-[10px] hover:underline decoration-4 decoration-orange-300 underline-offset-8">
            Home
          </div>
          <div className="mr-[10px]">Pages</div>
          <div className="mr-[10px]">Shop</div>
          <div className="mr-[10px]">Blog</div>
          <div className="mr-[10px]">Contacts</div>
        </div>

        <div className="flex text-xl">
          <div className="mr-[10px]">
            <LiaShoppingCartSolid />
          </div>
          <div className="mr-[10px]">
            <BsSearch />
          </div>
          <div className="mr-[10px] hidden md:flex">
            <CgMenuGridO />
          </div>
          <div className="mr-[10px] flex md:hidden" onClick={toggle}>
            <AiOutlineMenu />
          </div>
        </div>
      </div>
      {/* second header */}

      {show ? (
        <div className="fixed  left-0 bg-[#081375] w-[100%] z-50 h-[100vh]  flex  flex-col gap-5 top-0 ">
          <div className="w-full h-[90px] flex justify-center shadow-sm shadow-slate-50">
            <div className="flex text-white w-[95%]  justify-between items-center">
              <div>
                <img src={pic} alt="" />
              </div>
              <div>
                <div onClick={toggle}>
                  <AiOutlineClose />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[full] justify-center ">
            <div className="w-[95%] ">
              <div className=" flex items-center gap-3 text-white mb-[20px]">
                <div>Home</div>
                <div>
                  <FaArrowRight />
                </div>
              </div>
              <div className=" flex items-center gap-3 text-white mb-[20px]">
                <div>Shop</div>
                <div>
                  <FaArrowRight />
                </div>
              </div>
              <div className=" flex items-center gap-3 text-white mb-[20px]">
                <div>Blog</div>
                <div>
                  <FaArrowRight />
                </div>
              </div>
              <div className=" flex items-center gap-3 text-white mb-[20px]">
                <div>Contact</div>
                <div>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Headers;

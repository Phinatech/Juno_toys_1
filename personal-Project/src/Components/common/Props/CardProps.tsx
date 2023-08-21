import React from "react";

import { BsArrowRight } from "react-icons/bs";

interface ImagesCard {
  childPic: string;
}

const CardProps: React.FC<ImagesCard> = ({ childPic }) => {
  const [show, setShow] = React.useState(false);

  const toggleshow = () => {
    setShow(!show);
  };

  return (
    <div
      onMouseLeave={() => {
        toggleshow();
      }}
      onMouseOver={() => {
        toggleshow();
      }}
      className="  w-[fit-content] h-[fit-content] rounded-[10px] overflow-hidden "
    >
      <div className="flex justify-center mt-[20px] relative ">
        {/* blurred div */}
        <div
          className={`absolute  w-full h-full  ${
            show ? "bg-[#0000004f] rounded-[10px]" : null
          } rounded-[10px] `}
        ></div>

        {/* imgae card */}
        <div className=" rounded-[10px] max-sm:w-full object-contain hover:scale-110 transition duration-300 ease-in-out">
          <img
            src={childPic}
            alt=""
            loading="lazy"
            // className={`w-[100%] h-[100%]  rounded-[10px] outline-none object-contain hover:scale-110 transition duration-300 ease-in-out  ${
            //   show ? "" : null
            // } `}
            className="w-[100%] h-[100%] object-contain  rounded-[10px]"
          />

          {/*Hovering buttons  */}
          <div className="absolute text-white left-[20px] bottom-[20px] ">
            <div className="font-bold text-[25px]">Bath Toys</div>
            <div
              className={`lk items-center gap-3 justify-center ${
                show ? "flex" : "hidden"
              } `}
            >
              <div className="font-semibold">Show Now</div>
              <div className="font-semibold">
                <BsArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProps;

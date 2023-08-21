import React from "react";
import { catergoryProps } from "../../../Types";

const Category: React.FC<catergoryProps> = ({ subtitle, subtitle2 }) => {
  return (
    <div className="w-[100%] h-[fit-content] flex justify-center ">
      <div className=" w-[80%] justify-center flex flex-col items-center gap-3 ">
        <div className="font-bold text-[#181D4E] ">{subtitle}</div>
        <div className="text-[#181D4E] font-  text-[40px] max-md:text-[25px] max text-center font-bold leading-tight w-[100%]  ">
          {subtitle2}
        </div>
      </div>
    </div>
  );
};

export default Category;

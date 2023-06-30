import React from 'react';
import {catergoryProps} from "../../../Types"

const Category:React.FC<catergoryProps> = ({subtitle, subtitle2}) => {
  return (
    <div className="w-full h-[fit-content] flex justify-center">
      <div className=" w-[90%] justify-center flex flex-col items-center gap-3 shadow-sm">
        <div className="font-bold text-[#181D4E] ">{subtitle}</div>
        <div className="text-[#181D4E] font-  text-[25px] md:text-[40px] text-center font-bold leading-10 w-[85%] ">
          {subtitle2}
        </div>
      </div>
    </div>
  );
}

export default Category
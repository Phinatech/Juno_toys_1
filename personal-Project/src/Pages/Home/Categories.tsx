import { Category } from "../../Components";
import CardProps from "../../Components/common/Props/CardProps";
import pic1 from "../../assets/card1.jpg";
import pic2 from "../../assets/card2.jpg";
import pic3 from "../../assets/card3.jpg";
import pic4 from "../../assets/card4.jpg";

const Categories = () => {
  return (
    <div className="w-full h-[fit -content] flex justify-center">
      <div className="w-[95%] flex  flex-col max">
        <div className="m-[30px]">
          <Category
            subtitle="CATEGORIES"
            subtitle2="We  design toys not just for kids but with kids"
          />
        </div>
        <div className="grid gap-4 place-items-center grid-cols-4 max-sm:grid-cols-1 max-xl:grid-cols-2">
          <CardProps childPic={pic1} />
          <CardProps childPic={pic2} />
          <CardProps childPic={pic3} />
          <CardProps childPic={pic4} />
        </div>
      </div>
    </div>
  );
};

export default Categories;

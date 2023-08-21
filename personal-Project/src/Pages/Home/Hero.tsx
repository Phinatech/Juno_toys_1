import pic from "../../assets/heroCloud.png";

const Hero = () => {
  return (
    <div className="w-[100%] flex justify-center bg-hero min-h-[75vh] bg-center bg-no-repeat bg-cover  relative items-center overflow-hidden">
      <div className="flex  w-[90%] ">
        <div className=" z-[10]  w-[450px] max-md:w-[95%] max-sm:w-[80%s] font-font gap-6 flex flex-col ">
          <div className="text-[50px] leading-[1.2] font-semibold max-sm:text-[30px] max-sm:w-[80%]">
            Pick the best toy for your kid
          </div>
          <div className="text-[16px] max-sm:text-[14px] max-sm:w-[85%]">
            we offer a prenium service,whether you are shopping at one of our
            flagship stores or via our website!
          </div>
          <button className=" p-[15px] rounded-[50px] bg-[#12aee0] w-[150px] text-[white]">
            discover now
          </button>
        </div>

        <div className=" w-[full] rotate-180 absolute top-[30px] animate-bounce">
          <img src={pic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

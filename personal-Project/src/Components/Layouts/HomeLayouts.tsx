import { Outlet } from "react-router-dom";
import Headers from "../Blocks/Headers";
import Footer from "../Blocks/Footer";

const HomeLayouts = () => {
  return (
    <div>
      <Headers />
      <Outlet />
      <br />
      <Footer />
    </div>
  );
};

export default HomeLayouts;

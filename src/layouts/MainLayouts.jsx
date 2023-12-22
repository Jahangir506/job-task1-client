import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

const MainLayouts = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto pt-16">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default MainLayouts;

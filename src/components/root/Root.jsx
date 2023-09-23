import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Root = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <div className="w-10/12 mx-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;

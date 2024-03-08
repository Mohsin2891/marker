import { useSelector, shallowEqual } from "react-redux";

import Navbar from "../components/Navbar";
import Footer from "components/Footer";
import GlobalLoader from "components/shared/globalLoader/GlobalLoader";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />

      {children}
      <Footer />
    </div>
  );
};

export default Layout;

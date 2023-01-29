// Components
import Footer from "./Footer";
import Navbar from "./Navbar";
// TS
import { SharedLayoutProps } from "../..";
// SCSS
import layoutStyles from "../../scss/SharedLayout.module.scss";

const SharedLayout: React.FC<SharedLayoutProps> = ({ children }) => {
  return (
    <div className={layoutStyles.layoutContainer}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default SharedLayout;

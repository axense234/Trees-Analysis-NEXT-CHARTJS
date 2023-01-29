// SCSS
import footerStyles from "../../scss/Footer.module.scss";
// Components
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className={footerStyles.footerContainer}>
      <Logo />
      <p>© axense’s team 2023.All right reserved.</p>
    </footer>
  );
};

export default Footer;

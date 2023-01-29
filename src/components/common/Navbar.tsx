// SCSS
import navbarStyles from "../../scss/Navbar.module.scss";
// Components
import Logo from "./Logo";
// Data
import { navLinks } from "@/data";
// Next
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className={navbarStyles.navbarContainer} id='navbar'>
      <Logo />
      <ul className={navbarStyles.navbarLinks}>
        {navLinks.map((navLink) => {
          return (
            <li key={navLink.id}>
              <Link href={navLink.dest}>{navLink.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

// Next
import Image from "next/image";
import Link from "next/link";
// SCSS
import logoStyle from "../../scss/Logo.module.scss";

const Logo: React.FC = () => {
  return (
    <Link href='/'>
      <Image
        src='https://res.cloudinary.com/birthdayreminder/image/upload/v1674232876/Trees%20Analysis%20NEXT%20Project/Icon.png_tvr53r.png'
        alt='Logo'
        width='172'
        height='80'
        className={logoStyle.logo}
      />
    </Link>
  );
};

export default Logo;

import Image from "next/image";

import SignUpModal from "@components/modals/sign-up";

import NavLogo from "@assets/images/Yellow_and_Black_Illustrative_Education_Logo-removebg-preview.png";

import styles from "./main.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Image
        src={NavLogo}
        alt="smart brain education logo"
        width={150}
        height={50}
        className=""
      />
      <SignUpModal />
    </div>
  );
};

export default Navbar;

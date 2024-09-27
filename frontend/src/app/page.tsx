import SignUpModal from "@components/sign-up-modal";
import styles from "./main.module.css";

export default function Home() {
  return (
    <div className={styles.homePageContainer}>
      <div>Join us to learn and grow beyond your present self.</div>
      {/* <button className={styles.signUpBtn}>Sign Up</button> */}
      <SignUpModal/>
    </div>
  );
}

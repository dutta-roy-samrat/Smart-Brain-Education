import SignUpModal from "@components/modals/sign-up";
import styles from "./main.module.css";

export default function Home() {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.landingText}>Join us to learn and grow beyond your present self.</div>
      {/* <button className={styles.signUpBtn}>Sign Up</button> */}
      <SignUpModal/>
    </div>
  );
}

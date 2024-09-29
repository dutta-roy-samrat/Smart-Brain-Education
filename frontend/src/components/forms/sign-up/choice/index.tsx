import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";

import { EDUCATOR_SIGN_UP, STUDENT_SIGN_UP } from "@constants/sign-up";

import styles from "./main.module.css";

const SignUpChoice = ({ setChoice, setStep }) => {
  const handleChange = (e) => {
    setChoice(e.target.id);
  };
  return (
    <div>
      <div className={styles.formTitle}>Sign Up As</div>
      <div className={styles.choiceContainer}>
        <Label htmlFor={EDUCATOR_SIGN_UP} className={styles.labelClass}>
          <Input
            id={EDUCATOR_SIGN_UP}
            type="radio"
            name="sign_up"
            onChange={handleChange}
          />
          <span className={styles.choiceClass}>Educator</span>
        </Label>
        <Label htmlFor={STUDENT_SIGN_UP} className={styles.labelClass}>
          <Input
            id={STUDENT_SIGN_UP}
            type="radio"
            name="sign_up"
            onChange={handleChange}
          />
          <span className={styles.choiceClass}>Student</span>
        </Label>
      </div>
      <button onClick={() => setStep?.((prevStep) => prevStep + 1)}>
        Next
      </button>
    </div>
  );
};

export default SignUpChoice;

import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";

import styles from "./main.module.css";

const SignUpChoice = ({ setChoice, setStep }) => {
  const handleChange = (e) => {
    setChoice(e.target.id);
  };
  return (
    <div>
      <div className={styles.formTitle}>Sign Up As</div>
      <div className={styles.choiceContainer}>
        <Label htmlFor="educator_sign_up" className={styles.labelClass}>
          <Input
            id="educator_sign_up"
            type="radio"
            name="sign_up"
            onChange={handleChange}
          />
          <span className={styles.choiceClass}>Educator</span>
        </Label>
        <Label htmlFor="student_sign_up" className={styles.labelClass}>
          <Input
            id="student_sign_up"
            type="radio"
            name="sign_up"
            onChange={handleChange}
          />
          <span className={styles.choiceClass}>Student</span>
        </Label>
      </div>
      <button onClick={() => setStep?.((prevStep) => prevStep + 1)}>Next</button>
    </div>
  );
};

export default SignUpChoice;

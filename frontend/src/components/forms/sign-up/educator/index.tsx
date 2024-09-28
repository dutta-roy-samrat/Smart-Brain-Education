import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";

import styles from "./main.module.css";
import SharedSignUpForm from "../shared";

const EducatorSignUpForm = ({ setStep }) => {
  const renderFields = () => (
    <div className={styles.fieldContainerClass}>
      <div className={styles.gradCertFieldTitle}>
        Upload your graduation certificate marksheet
      </div>
      <div className={styles.gradCertFieldContainer}>
        <Label htmlFor="profile_image" className={styles.imgChoiceBtn}>
          Choose Image
        </Label>
        <Input
          type="file"
          id="profile_image"
          className={styles.actualImgChoiceInputBtn}
          accept="image/*"
        />
        <span className={styles.chosenFileName}>No File Chosen</span>
      </div>
    </div>
  );
  return <SharedSignUpForm renderFields={renderFields} setStep={setStep} />;
};

export default EducatorSignUpForm;

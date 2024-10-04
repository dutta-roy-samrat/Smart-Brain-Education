import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";

import styles from "./main.module.css";
import SharedSignUpForm from "../shared";
import { ReactNode } from "react";

const EducatorSignUpForm = ({ setStep }) => {
  // const
  const renderFields = (form) => {
    const {
      register,
      formState: { errors },
    } = form;
    return (
      <>
        <div className={styles.fieldContainerClass}>
          <div className={styles.gradCertFieldTitle}>
            Upload your graduation certificate marksheet
          </div>
          <div className={styles.gradCertFieldContainer}>
            <Label htmlFor="grad_cert" className={styles.imgChoiceBtn}>
              Choose Image
            </Label>
            <Input
              type="file"
              id="grad_cert"
              className={styles.actualImgChoiceInputBtn}
              accept="image/*"
              {...register("gradCert", {
                required: {
                  value: true,
                  message: "Please upload your graduation certificate",
                },
              })}
            />
            <span className={styles.chosenFileName}>No File Chosen</span>
          </div>
          {errors.gradCert && <p>{errors.gradCert?.message as ReactNode}</p>}
        </div>
        <div className={styles.fieldContainerClass}>
          <Label htmlFor="subject_expertise" className={styles.labelClass}>
            Select the subject of your expertise
          </Label>
          <Select
            {...register("subjectExpertise", {
              required: {
                value: true,
                message: "Please select the subject of your expertise",
              },
            })}
            id="subject_expertise"
          >
            <SelectTrigger className={styles.inputClass}>
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          {errors.gradCert && <p>{errors.gradCert?.message as ReactNode}</p>}
        </div>
      </>
    );
  };
  return <SharedSignUpForm renderFields={renderFields} setStep={setStep} />;
};

export default EducatorSignUpForm;

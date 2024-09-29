import Image from "next/image";

import { DialogFooter } from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";

import ProfileImagePlaceholderImg from "@assets/images/abstract-user-flat-4.svg";

import styles from "./main.module.css";
import { useState } from "react";

const SharedSignUpForm = ({ renderFields, setStep }) => {
  const [formFieldData,setFormFieldData]=useState(()=>[...DEFAULT_FORM_DATA])
  const handleSubmit = (e) => {
    return "";
  };
  const handleProfileImageUplaod = (e) => {
    return "";
  };
  return (
    <>
      <div className={styles.formContainer}>
        <Image
          src={ProfileImagePlaceholderImg}
          alt="profile image placeholder"
          width={250}
          height={250}
          className={styles.profileImg}
        />
        <div className={styles.fieldContainerClass}>
          <div className={styles.profileImgLabelClass}>Profile Image</div>
          <div className={styles.profileImgInputContainer}>
            <Label htmlFor="profile_image" className={styles.chooseImgBtn}>
              Choose Image
            </Label>
            <Input
              type="file"
              id="profile_image"
              className={styles.profileImgActualInputBtn}
              accept="image/*"
            />
            <span className={styles.fileSelected}>No File Chosen</span>
          </div>
        </div>
        <div className={styles.fieldContainerClass}>
          <Label htmlFor="first_name" className={styles.labelClass}>
            First Name
          </Label>
          <Input type="text" id="first_name" className={styles.inputClass} />
        </div>
        <div className={styles.fieldContainerClass}>
          <Label htmlFor="last_name" className={styles.labelClass}>
            Last Name
          </Label>
          <Input type="text" id="last_name" className={styles.inputClass} />
        </div>
        <div className={styles.fieldContainerClass}>
          <Label htmlFor="email" className={styles.labelClass}>
            Email
          </Label>
          <Input type="email" id="email" className={styles.inputClass} />
        </div>
        <div className={styles.fieldContainerClass}>
          <Label htmlFor="password" className={styles.labelClass}>
            Password
          </Label>
          <Input type="password" id="password" className={styles.inputClass} />
        </div>
        <div className={styles.fieldContainerClass}>
          <Label htmlFor="confirm_password" className={styles.labelClass}>
            Confirm Password
          </Label>
          <Input
            type="password"
            id="confirm_password"
            className={styles.inputClass}
          />
        </div>
      </div>
      {renderFields?.()}
      <DialogFooter className={styles.footerClass}>
        <button onClick={() => setStep?.((prevStep) => prevStep - 1)}>
          Back
        </button>
        <button
          type="submit"
          className={styles.signUpBtnClass}
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </DialogFooter>
    </>
  );
};

export default SharedSignUpForm;

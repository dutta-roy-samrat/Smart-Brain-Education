import Image from "next/image";

import { DialogFooter } from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";

import ProfileImagePlaceholderImg from "@assets/images/abstract-user-flat-4.svg";

import styles from "./main.module.css";

const SharedSignUpForm = ({ renderFields, setStep }) => {
  const handleSubmit = (e) => {
    return "";
  };
  const handleProfileImageUplaod = (e) => {
    return "";
  };
  return (
    <>
      <div className="grid gap-4 py-4">
        <Image
          src={ProfileImagePlaceholderImg}
          alt="profile image placeholder"
          width={250}
          height={250}
          className="cols-4 m-auto"
        />
        <div className={styles.fieldContainerClass}>
          <div className="text-right text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Profile Image
          </div>
          <div className="col-span-3 text-center text-xs">
            <Label
              htmlFor="profile_image"
              className="rounded-md border-2 border-black px-2"
            >
              Choose Image
            </Label>
            <Input
              type="file"
              id="profile_image"
              className="hidden"
              accept="image/*"
            />
            <span className="ml-2">No File Chosen</span>
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

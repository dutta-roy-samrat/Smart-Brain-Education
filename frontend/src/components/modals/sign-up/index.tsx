"use client";

import { useState } from "react";

import StudentSignUpForm from "@components/forms/sign-up/student";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@components/ui/dialog";
import SignUpChoice from "@components/forms/sign-up/choice";
import EducatorSignUpForm from "@components/forms/sign-up/educator";
import { EDUCATOR_SIGN_UP } from "@constants/sign-up";

import styles from "./main.module.css";

const SignUpModal = () => {
  const [step, setStep] = useState(0);
  const [choice, setChoice] = useState("");
  const renderSignUpForm = () =>
    choice === EDUCATOR_SIGN_UP ? (
      <EducatorSignUpForm setStep={setStep} />
    ) : (
      <StudentSignUpForm setStep={setStep} />
    );
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={styles.dialogTriggerBtn}>
          Sign Up
        </button>
      </DialogTrigger>
      <DialogTitle className={styles.metaInfo}>Sign Up Modal</DialogTitle>
      <DialogDescription className={styles.metaInfo}>
        Register for our website
      </DialogDescription>
      <DialogContent
        className={styles.dialogContent}
        onInteractOutside={(e) => e.preventDefault()}
        onCloseAutoFocus={() => {
          setStep(0);
          setChoice("");
        }}
      >
        {step ? (
          renderSignUpForm()
        ) : (
          <SignUpChoice setChoice={setChoice} setStep={setStep} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SignUpModal;

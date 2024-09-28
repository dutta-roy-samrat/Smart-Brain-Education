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

const SignUpModal = () => {
  const [step, setStep] = useState(0);
  const [choice, setChoice] = useState("");
  const renderSignUpForm = () =>
    choice === "educator_sign_up" ? (
      <EducatorSignUpForm setStep={setStep}/>
    ) : (
      <StudentSignUpForm setStep={setStep}/>
    );
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="mt-5 rounded-full bg-black p-2 px-4 uppercase tracking-widest text-white hover:bg-slate-600">
          Sign Up
        </button>
      </DialogTrigger>
      <DialogTitle className="hidden">Sign Up Modal</DialogTitle>
      <DialogDescription className="hidden">
        Register for our website
      </DialogDescription>
      <DialogContent
        className="max-h-screen overflow-y-scroll"
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

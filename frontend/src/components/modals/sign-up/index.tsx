"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogHeader,
} from "@components/ui/dialog";
import SignUpForm from "@components/forms/sign-up";

import styles from "./main.module.css";

const SignUpModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={styles.dialogTriggerBtn}>Sign Up</button>
      </DialogTrigger>
      <DialogContent
        className={styles.dialogContent}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex items-center">
          <DialogTitle>Create an account</DialogTitle>
          <DialogDescription>To get started today.</DialogDescription>
        </DialogHeader> 
        <SignUpForm />
      </DialogContent>
    </Dialog>
  );
};

export default SignUpModal;

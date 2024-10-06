import Image from "next/image";

import { DialogFooter } from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { DevTool } from "@hookform/devtools";

import styles from "./main.module.css";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import ErrorText from "@components/ui/error-text";

const SignUpForm = () => {
  const form = useForm();
  const {
    register,
    formState,
    getValues,
    handleSubmit,
    control,
    formState: { errors },
  } = form;
  const { isSubmitting } = formState;

  console.log(isSubmitting, "kkl");
  const onSubmit = (e) => {
    console.log(e, "kkl");
    return "";
  };

  const {
    firstName: firstNameError,
    lastName: lastNameError,
    password: passWordError,
    confirmPassword: confirmPasswordError,
    email: emailError,
    role: roleError,
  } = errors;

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.fieldContainerClass}>
          <Label htmlFor="first_name" className={styles.labelClass}>
            First Name :
          </Label>
          <Input
            type="text"
            id="first_name"
            className={styles.inputClass}
            {...register("firstName", {
              required: {
                value: true,
                message: "First Name is a required field !",
              },
            })}
          />
          {firstNameError && (
            <ErrorText>{firstNameError?.message as ReactNode}</ErrorText>
          )}
        </div>
        <div className={styles.fieldContainerClass}>
          <Label htmlFor="last_name" className={styles.labelClass}>
            Last Name :
          </Label>
          <Input
            type="text"
            id="last_name"
            className={styles.inputClass}
            {...register("lastName", {
              required: {
                value: true,
                message: "Last Name is a required field !",
              },
            })}
          />
          {lastNameError && (
            <ErrorText>{lastNameError?.message as ReactNode}</ErrorText>
          )}
        </div>
        <div className={styles.fieldContainerClass}>
          <Label htmlFor="email" className={styles.labelClass}>
            Email :
          </Label>
          <Input
            type="email"
            id="email"
            className={styles.inputClass}
            {...register("email", {
              required: {
                value: true,
                message: "Email is a required field !",
              },
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Invalid Email !",
              },
            })}
          />
          {emailError && (
            <ErrorText>{emailError?.message as ReactNode}</ErrorText>
          )}
        </div>
        <div className={styles.fieldContainerClass}>
          <Label htmlFor="password" className={styles.labelClass}>
            Password :
          </Label>
          <Input
            type="password"
            id="password"
            className={styles.inputClass}
            {...register("password", {
              required: {
                value: true,
                message: "Password is a required field !",
              },
            })}
          />
          {passWordError && (
            <ErrorText>{passWordError?.message as ReactNode}</ErrorText>
          )}
        </div>
        <div className={styles.fieldContainerClass}>
          <Label htmlFor="confirm_password" className={styles.labelClass}>
            Confirm Password :
          </Label>
          <Input
            type="password"
            id="confirm_password"
            className={styles.inputClass}
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Confirm your password",
              },
              validate: {
                confirmPassword: (val) =>
                  val === getValues("password") ||
                  "Passwords Fields don't match. Please re-check !",
              },
            })}
          />
          {confirmPasswordError && (
            <ErrorText>{confirmPasswordError?.message as ReactNode}</ErrorText>
          )}
        </div>
        <div className={styles.fieldContainerClass}>
          <Label htmlFor="role">Role :</Label>
          <Select
            {...register("role", {
              required: {
                value: true,
                message: "Select a role",
              },
            })}
          >
            <SelectTrigger id="role">
              <SelectValue placeholder="Select a Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Roles</SelectLabel>
                <SelectItem value="educator">Educator</SelectItem>
                <SelectItem value="student">Student</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {roleError && (
            <ErrorText>{roleError?.message as ReactNode}</ErrorText>
          )}
        </div>
      </div>
      <DialogFooter className={styles.footerClass}>
        <button
          type="submit"
          className={styles.signUpBtnClass}
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
        >
          Sign Up
        </button>
      </DialogFooter>
      {/* <DevTool control={control} /> */}
    </>
  );
};

export default SignUpForm;

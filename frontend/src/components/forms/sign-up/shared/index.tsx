import Image from "next/image";

import { DialogFooter } from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { DevTool } from "@hookform/devtools";

import ProfileImagePlaceholderImg from "@assets/images/abstract-user-flat-4.svg";

import styles from "./main.module.css";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";

const SharedSignUpForm = ({ renderFields, setStep }) => {
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
              id="profileImage"
              className={styles.profileImgActualInputBtn}
              accept="image/*"
              {...register("profileImage")}
            />
            <span className={styles.fileSelected}>No File Chosen</span>
          </div>
        </div>
        <div className={styles.fieldContainerClass}>
          <Label htmlFor="first_name" className={styles.labelClass}>
            First Name
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
          {errors.firstName && <p>{errors.firstName?.message as ReactNode}</p>}
        </div>
        <div className={styles.fieldContainerClass}>
          <Label htmlFor="last_name" className={styles.labelClass}>
            Last Name
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
          {errors.lastName && <p>{errors.lastName?.message as ReactNode}</p>}
        </div>
        <div className={styles.fieldContainerClass}>
          <Label htmlFor="email" className={styles.labelClass}>
            Email
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
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$/,
                message: "Invalid Email !",
              },
            })}
          />
          {errors.email && <p>{errors.email?.message as ReactNode}</p>}
        </div>
        <div className={styles.fieldContainerClass}>
          <Label htmlFor="password" className={styles.labelClass}>
            Password
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
          {errors.password && <p>{errors.password?.message as ReactNode}</p>}
        </div>
        <div className={styles.fieldContainerClass}>
          <Label htmlFor="confirm_password" className={styles.labelClass}>
            Confirm Password
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
                  "Passwords Fields don't match. Please re-check!",
              },
            })}
          />
          {errors.confirmPassword && (
            <p>{errors.confirmPassword?.message as ReactNode}</p>
          )}
        </div>
      </div>
      {renderFields?.(form)}
      <DialogFooter className={styles.footerClass}>
        <button onClick={() => setStep?.((prevStep) => prevStep - 1)}>
          Back
        </button>
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

export default SharedSignUpForm;

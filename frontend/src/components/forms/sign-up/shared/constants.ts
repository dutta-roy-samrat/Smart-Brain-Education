export const DEFAULT_SIGN_UP_FORM_DATA = Object.freeze({
  firstName: { value: "", required: true },
  lastName: { value: "", required: true },
  email: {
    value: "",
    required: true,
    validation: true,
    isValid: emailValidation,
  },
  password: { value: "", required: true, validaton: true },
});

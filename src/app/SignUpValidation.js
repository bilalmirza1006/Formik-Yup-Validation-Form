import * as Yup from "yup";
// export const SignUpValidation = Yup.object({
// export const SignUpValidation = Yup.object({

//   firstName: Yup.string()
//     .min(3, "Please enter a name with at least 3 characters")
//     .required("Please enter the first name"),
//   lasteName: Yup.string()
//     .min(3, "must be the 3 cherector")
//     .required("please enter the lastname "),
//   email: Yup.string()
//     .email("please enter the valid email")
//     .required(" enter the email"),
//   password: Yup.string()
//     .min(3, "must be the 3 cherector")
//     .required("plese enter the password"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password")], "password not match")
//     .required("enter the confirm password")
// })


// import * as Yup from "yup";

export const SignUpValidation = Yup.object({
  firstName: Yup.string()
    // .max(3, "Please enter a name with at least 3 characters")
    .required("Please enter the first name"),

  lasteName: Yup.string()
    // .max(3, "Please enter a last name with at least 3 characters")
    .required("Please enter the last name"),

  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter an email"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter a password"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),
});

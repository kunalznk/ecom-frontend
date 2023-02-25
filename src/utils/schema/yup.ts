import * as yup from "yup";

 const firstName = yup.string().required().min(5).max(100);
 const lastName = yup.string().required().min(5).max(100);
 const password = yup
  .string()
  .required("Please Enter your password")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  )
  .min(5)
  .max(100);

const emailId = yup
  .string()
  .email("Please enter valid email id")
  .required()
  .min(5)
  .max(100);

const phoneNumber = yup
  .string()
  .required("Please enter valid mobile number")
  .min(10)
  .max(10);  

const role = yup.string().matches(/(CUSTOMER|SELLER|DELIVERY_PARTNER)/).required("Plaese select role");
const token = yup.string().required()
const id = yup.string().required("Please provide unique Identifier")

const addressLine1 = yup.string().required("Please Enter Valud Address").min(5).max(1000);
const addressLine2 = yup.string().optional().min(5).max(1000);
const city = yup.string().required("Please Enter City").min(5).max(250);
const state = yup.string().required("Please Enter State").min(5).max(250);
const pinCode = yup.string().required("Please Enter Pin Coed").min(5).max(10);
const addressType = yup.string().required("Please Enter Type").min(5).max(250);
const isDefault = yup.boolean().optional()


export  {
  firstName,
  lastName,
  emailId,
  password,
  phoneNumber,
  role,
  id,
  token,
  addressLine1,
  addressLine2,
  city,
  state,
  pinCode,
  addressType,
  isDefault
}
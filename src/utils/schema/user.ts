import * as yup from "yup";
import { InferType } from "yup"
import { firstName ,lastName , emailId, phoneNumber, password, role, addressLine1 ,addressLine2, city, state, pinCode , addressType , isDefault , id} from "./yup"

export const address = yup.object({
    addressLine1,
    addressLine2,
    city,
    state,
    pinCode,
    addressType,
    isDefault
})

export const CreateUserInputSchema = yup.object({
    firstName,
    lastName,
    emailId,
    phoneNumber,
    password,
    role
  });
export type registerUserType = InferType<typeof CreateUserInputSchema>

export const LoginInputSchema = yup.object({
    emailId,
    password,
  });  
export type loginUserType = InferType<typeof LoginInputSchema>


export const UserSchema = CreateUserInputSchema.shape({
    address: yup.array().of(address).min(0),
    id
})
export type userType = InferType<typeof UserSchema>
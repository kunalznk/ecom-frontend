import * as yup from "yup";
import { InferType } from "yup"
import { firstName ,lastName , emailId, phoneNumber, password, role, addressLine1 ,addressLine2, city, state, pinCode , addressType as ad , isDefault , id} from "./yup"

export const address = yup.object({
    addressLine1,
    addressLine2,
    city,
    state,
    pinCode,
    addressType: ad,
    isDefault
})
export type addressType = InferType<typeof address>
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
  _id: id,
  address: yup.array().of(address).min(0),
})
export type userType = InferType<typeof UserSchema>
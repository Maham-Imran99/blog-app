import * as yup from "yup";
import { LoginUserInput, SignUpUserInput } from "../interfaces";
import { PASSWORD_REGEX } from "../constants/regex";
import { PASSWORD_TEXT } from "../constants/constantText";
import { PASSWORD_VALIDATION_MESSAGE, YupSchemaShape } from "../constants";

export const SignUpSchema = yup.object().shape<YupSchemaShape<SignUpUserInput>>({
  email: yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .matches(PASSWORD_REGEX, PASSWORD_VALIDATION_MESSAGE),
});

function requiredMessage(PASSWORD_TEXT: string): yup.Message<any> | undefined {
  throw new Error("Function not implemented.");
}

export const LoginShema = yup.object().shape<YupSchemaShape<LoginUserInput>>({
  username: yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .matches(PASSWORD_REGEX, PASSWORD_VALIDATION_MESSAGE),
});

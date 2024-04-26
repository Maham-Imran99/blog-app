import * as yup from "yup";
import { CreateArticleInput, LoginUserInput, SignUpUserInput } from "../interfaces";
import { DATE_REGEX, PASSWORD_REGEX } from "../constants/regex";
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

export const CreateArticleSchema = yup.object().shape<YupSchemaShape<CreateArticleInput>>({
  title: yup.string()
    .required('Title is required.'),
  categoryIds: yup.array()
    .of(yup.number().integer('Category ID must be an integer.')
      .required('Category ID is required.'))
    .min(1, 'At least one category is required.')
    .required('Category IDs are required.'),
  description: yup.string()
    .required('Description is required.'),
  time: yup.string()
    .matches(DATE_REGEX, 'Time must be a valid ISO 8601 string.')
    .required('Time is required.'),
  imgUrl: yup.string()
    .url('Image URL must be a valid URL.')
  // .required('Image URL is required.')


})



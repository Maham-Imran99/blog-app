import * as yup from "yup";
import { CreateArticleInput, LoginUserInput, SignUpUserInput, UpdateArticleInput } from "../interfaces";
import { PASSWORD_REGEX } from "../constants/regex";
import { PASSWORD_VALIDATION_MESSAGE, YupSchemaShape } from "../constants";

export const SignUpSchema = yup.object().shape<YupSchemaShape<SignUpUserInput>>({
  email: yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .matches(PASSWORD_REGEX, PASSWORD_VALIDATION_MESSAGE),
});

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
  categoryIds: yup.number(),
  description: yup.string()
    .required('Description is required.'),
  time: yup.string(),
  imgUrl: yup.string()

});

export const UpdateArticleSchema = yup.object().shape<YupSchemaShape<UpdateArticleInput>>({
  title: yup.string(),
  categoryIds: yup.number(),
  description: yup.string(),
  id: yup.number(),
  time: yup.string(),
  imgUrl: yup.string(),
})



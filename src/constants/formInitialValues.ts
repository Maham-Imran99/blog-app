import { CreateArticleInput, LoginUserInput, SignUpUserInput } from "../interfaces";

export const loginUserInitialValues: LoginUserInput = {
  username: "",
  password: "",
};

export const SignUpUserInitialValues: SignUpUserInput = {
  email: "",
  password: ""
}

export const CreateArticleFormInitialValues: CreateArticleInput = {
  title: "",
  categoryIds: 0,
  description: "",
  time: "",
  imgUrl: "",
}
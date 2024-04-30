import { CreateArticleInput, LoginUserInput, SignUpUserInput, UpdateArticleInput } from "../interfaces";

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
  categoryIds: 1,
  description: "",
  time: "",
  imgUrl: "",
}

export const UpdateArticleFormInitialValues: UpdateArticleInput = {
  title: "",
  categoryIds: 1,
  description: "",
  time: "",
  imgUrl: "",
  id: 1
}
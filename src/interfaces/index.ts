import { ReactNode } from "react";

export type SignUpUserInput = {
    email: string,
    password: string
}
export type LoginUserInput = {
    username: string,
    password: string
};

export type CreateArticleInput = {
    title: string;
    categoryIds: number;
    description: string;
    time: string;
    imgUrl: string;
};

export type UpdateArticleInput = {
    id: number
    title: string;
    categoryIds: number;
    description: string;
    time: string;
    imgUrl: string;
}

export type ArticleCardProps = {
    imageUrl: string;
    title: string;
    category: string;
    date: string;
    author: string;
    id: number
}

export type ChildrenType = {
    children?: ReactNode;
};


export type AuthContextProps = {
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
};

export type DeleteDialogProps = {
    open: boolean;
    onClose: () => void;
    articleId: number
};

export type Params = {
    id: string;
};

export type UpdateArticleProps = {
    articleId: string;
  };
  
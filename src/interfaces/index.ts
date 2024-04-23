import { ReactNode } from "react";

export type SignUpUserInput = {
    email: string,
    password: string
}
export type LoginUserInput = {
    username: string,
    password: string
};

export type ArticleCardProps = {
    imageUrl: string;
    title: string;
    category: string;
    date: string;
    author: string;
}

export type ChildrenType = {
    children?: ReactNode;
};


export type AuthContextProps = {
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
};
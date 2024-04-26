import SignUpPage from "../pages/auth/signUp/signUpPage";
import LoginPage from "../pages/auth/login/loginPage";
import HomePage from "../pages/articles/listing";
import CreateArticlePage from "../pages/articles/createArticle";
import path from "path";
import MyArticlesScreen from "../pages/myArticles/listing";

export const routes = [
    { path: "/signup", element: <SignUpPage /> },
    { path: "/login", element: <LoginPage />},
    { path: "/", element: <HomePage />},
    { path: "/create", element: <CreateArticlePage /> },
    { path: "/my-articles", element: <MyArticlesScreen />}
]


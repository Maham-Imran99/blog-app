import SignUpPage from "../pages/auth/signUp/signUpPage";
import LoginPage from "../pages/auth/login/loginPage";
import HomePage from "../pages/articles/listing";
import CreateArticlePage from "../pages/articles/createArticle";
import MyArticlesScreen from "../pages/myArticles/listing";
import ArticleScreen from "../components/articles/ArticleDetailPage";

export const routes = [
    { path: "/signup", element: <SignUpPage /> },
    { path: "/login", element: <LoginPage />},
    { path: "/", element: <HomePage />},
    { path: "/create", element: <CreateArticlePage /> },
    { path: "/my-articles", element: <MyArticlesScreen />},
    { path: "/article/:id", element: <ArticleScreen />}
]


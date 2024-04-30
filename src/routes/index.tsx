import { SignUpPage } from "../pages/auth/signUp";
import { LoginPage } from "../pages/auth/login";
import { HomePage } from "../pages/articles/listing";
import { CreateArticlePage } from "../pages/articles/createArticle";
import { MyArticlesScreen } from "../pages/myArticles/listing";
import { UpdateArticlePage } from "../pages/articles/updateArticle";
import { ArticleDetailPage } from "../pages/articles/articleDetailPage";
import { SearchArticle } from "../components/articles/SearchArticle";

export const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/signup", element: <SignUpPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/create", element: <CreateArticlePage /> },
    { path: "/my-articles", element: <MyArticlesScreen /> },
    { path: "/article/:id", element: <ArticleDetailPage/> },
    { path: `/update/:id`, element: <UpdateArticlePage /> },
    { path: "/search/:search", element: <SearchArticle/>}
]


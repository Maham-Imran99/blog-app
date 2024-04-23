import SignUpPage from "../pages/auth/signUp/signUpPage";
import LoginPage from "../pages/auth/login/loginPage";

export const routes = [
    { path: "/signup", element: <SignUpPage /> },
    { path: "/login", element: <LoginPage />}
]
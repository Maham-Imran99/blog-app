import React, {Fragment} from "react";
import Header from "../common/Header";

export const Layout = ({children}) => <Fragment>
    <Header />
    {children}
</Fragment>
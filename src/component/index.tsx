import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from "../pages/errorPage";
import { ReduxEx } from "../pages/redux";
import { Home } from "../pages";
import { ContextEx } from "../pages/context";
import { Header } from "./header";
import { Footer } from "./footer";
import ThemeContext from "../theme";

export const Layout = (): JSX.Element => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`wrap ${theme}`}>
            <Header />
            <Routes>
                <Route path="/*" Component={ErrorPage} />
                <Route path="/" Component={Home} />
                <Route path="/redux" Component={ReduxEx} />
                <Route path="/context" Component={ContextEx} />
            </Routes>
            <Footer />
        </div>
    );
};

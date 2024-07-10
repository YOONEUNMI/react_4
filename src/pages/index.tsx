import React from "react";
import { Link } from "react-router-dom";

export const Home = (): JSX.Element => {
    return (
        <div>
            <h1>React 세미나4차</h1>
            <h2>1. Route</h2>
            <h2>
                <Link to="/redux">2. Redux</Link>
            </h2>
            <h3>
                <Link to="/context">3. Context</Link>
            </h3>
        </div>
    );
};

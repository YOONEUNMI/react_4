import React from "react";

const ThemeContext = React.createContext<{ theme: "dark" | "light" }>({
    theme: "dark",
});
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;

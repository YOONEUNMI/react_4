import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
    theme: "dark" | "light";
}

const initialState: ThemeState = {
    theme: "dark",
};

export const ThemeSlice = createSlice({
    name: "ThemeInfo",
    initialState: initialState,
    reducers: {},
});

export const {} = ThemeSlice.actions;

export default ThemeSlice.reducer;

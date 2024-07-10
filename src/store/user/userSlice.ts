import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    userName: string;
}

const initialState: UserState = {
    userName: "",
};

export const UserSlice = createSlice({
    name: "userInfo",
    initialState: initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            console.log(action.payload);
            state.userName = action.payload;
        },
    },
});

export const { setUserName } = UserSlice.actions;

export default UserSlice.reducer;

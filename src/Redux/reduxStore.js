import { configureStore } from "@reduxjs/toolkit";
import UserResponseSlice from "./UserResponseSlice";
import UserSlice from "./UserSlice";

const Store = configureStore({
    reducer:{
        userResponse:UserResponseSlice,
        User:UserSlice
    }
});
export default Store;
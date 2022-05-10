import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feartures/useSlice";





export default configureStore({
    reducer:{
        user : userReducer
    }
})
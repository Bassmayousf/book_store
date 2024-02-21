import { configureStore } from "@reduxjs/toolkit";
import  {books} from "./BookSlice";
import { authReducer } from "./authSlice";
import report from "./reportSlice"
 export const store = configureStore({reducer:{books,authReducer,report}})

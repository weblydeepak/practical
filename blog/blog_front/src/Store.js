import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "../src/Reducer/UserReducer";
import { BlogReducer, singleBlogReducer,  } from "./Reducer/BlogReducer";
const store = configureStore({
    reducer: {
    user:userReducer,
    Blogs:BlogReducer,
    Blog:singleBlogReducer,
    }
})

export default store;
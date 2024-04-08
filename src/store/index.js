import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../Main/index";

export  const store=configureStore({
    reducer:rootReducer
})
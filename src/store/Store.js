import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Reducer";


const store = configureStore({
    reducer : {
        users : reducer
    }
})

export default store
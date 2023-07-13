import {configureStore} from "@reduxjs/toolkit";
import {domophoneReducer} from "../container/Domophone/DomophoneSlice";

export const store = configureStore({
    reducer:{
        domophone: domophoneReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;


import {configureStore} from "@reduxjs/toolkit";
import messageReducer from './reducers/message.js'
import {rememberReducer, rememberEnhancer} from "redux-remember";

const rememberedKeys = ['auth'];

const store = configureStore({
    reducer: rememberReducer({
        message: messageReducer,
    }),
    enhancers: [rememberEnhancer(window.localStorage, rememberedKeys,{persistWholeStore: true})]
});

export default store
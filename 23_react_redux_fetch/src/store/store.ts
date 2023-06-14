import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from '../reducer/reducers';

const rootReducer = combineReducers({
    users: userReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
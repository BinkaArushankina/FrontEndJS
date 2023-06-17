import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataSlice from '../reducer/reducers';

//2.2 rootReducer kombiniruem wse imejuschiesa u nas reduceri
const rootReducer = combineReducers({//objedinaet mnogo reducers, no sostoit is odnogo
    data: dataSlice
})

//2.1sosdaem store w kotorom peredaem infu o reducere kotorij kombiniruet w sebe ostalnie reduceri
export const store = configureStore({
    reducer: rootReducer
})

//export const store1 = configureStore({
//    reducer: {data: dataSlice}
//})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
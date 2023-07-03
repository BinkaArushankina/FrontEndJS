import { createSlice } from '@reduxjs/toolkit';

const initialState = {//poiskowaja stroka
    searchValue: ""
}    

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        onChangeSearch(state, action) {
            state.searchValue = action.payload;//u sostojania menaem pole sarchvalue s nagruskoj payload
        }                                      //schto tschelowek wnosit w stroku , to dejstwie i polutschaetsa(action)
    }
});

export const selectSearch = (state: any) => state.search;
export const { onChangeSearch } = searchSlice.actions;
export default searchSlice.reducer;
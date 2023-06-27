import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface ISortingItem {
    name: string;
    sortProperty: string;
    order: string;
}

interface IFilterState {
    categoryId: number;
    categoryNames: string[];
    categoryName: string;
    sortingItem: ISortingItem;
    currentPage: number;
}



const initialState: IFilterState = {
    categoryId: 0,
    categoryNames: [
        'all',
        'meat',
        'vegan',
        'grill',
        'spicy',
        'closed'
    ],

    categoryName: 'all',//poka tschelowek ne wiral category, budut pokasiwatsa wse

    sortingItem: {
        name: 'trend',//po umoltschaniu
        sortProperty: 'rating',
        order: 'desc'
    },

    currentPage: 1//startowaja straniza po umoltschaniu

}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        onClickCategory(state = initialState, action: PayloadAction<number>) {
            state.categoryId = action.payload;//pomenali id, polutschili kategoriu kotoruju tschel wibral
            state.categoryName = state.categoryNames[state.categoryId]//pomenali name
        },
        onClickSort(state = initialState, action: PayloadAction<ISortingItem>) {
            state.sortingItem = action.payload
        },
        setCurrentPage(state = initialState, action: PayloadAction<number>) {//dobawili paginaziu
            state.currentPage = action.payload;
        }
    }
});

export const selectFilter = (state: any) => state.filter;

export const { onClickCategory, onClickSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
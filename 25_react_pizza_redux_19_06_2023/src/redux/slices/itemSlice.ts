import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { ISortingItem } from "./filterSlice";

interface IParams {
    categoryId: number;
    sortingItem: ISortingItem;
    searchValue: string;
    currentPage: number;
}

export const fetchItems = createAsyncThunk(//fetch sapros na serwer
    'items/itemsFetchStatus', 
    async (params: IParams) => {
        const {categoryId, sortingItem, searchValue, currentPage } = params;
        //delaem fetch sapros na serwer
        const res = await fetch (`
            https://6442fcd190738aa7c069c92c.mockapi.io/items?${
                categoryId > 0 ? `category=${categoryId}` : ""
            }&sortBy=${sortingItem.sortProperty}&order=${sortingItem.order}${
                searchValue ? `&search=${searchValue}` : ""
            }&page=${currentPage || 1}&limit=8`
        );
        const data = await res.json();//sochranaem fetch sapros
        return data;    //woswraschaem ego, w fetchItems cochranilas data
    }
);

const initialState = {
    items: [],//massiw
    item: {},//object
    status: 'loading', //popali  w etot slice delaem sapros i podgruschaem dannie
    activeType: 0,//po umoltschaniu 0 , a potom daobawlaetsa schto tschelowek sakasiwaet
    activeSize: 0,//rasmer pizzi
    typeName: ['thin', 'traditional'], //kartesch eto massiw w kotorom mi snaem saranee is tschego udet sostojatj massiw 
}

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setItems(state = initialState, action) {//sochranili itemsi i itemi
            state.items = action.payload;
        },
        setItem(state = initialState, action) {//localStorage instrument ot brausera, kotorij poswolaet chranitj informaziu w formate key: value, dlja optimisazii raboti priloschenia (w inspect application) i tam cookies
            state.items = action.payload;
            localStorage.setItem('item', JSON.stringify(action.payload));//setItem eto schto to sapisatj w localstorage
        },
        setActiveType(state = initialState, action) {//sochranili tip 
            state.activeType = action.payload;
        },
        setActiveSize(state = initialState, action) {//sochranili rasmer pizzi
            state.activeSize = action.payload;
        }
    },
    extraReducers: {
        //createAsyncThunk daet dostup k 3 suschnostjam dlja detalisazii dlja sinchronowo saprosa
        //1.Pending => kogda assinchronnij sapros w prozesse
        [fetchItems.pending.type]: (state) => {
            state.status = 'loading';
            state.items = [];//satschiaem pole
        },
        //2.Fullfilled => kogda assynchronnij sapros wipolnen uspeschno
        [fetchItems.fulfilled.type]: (state, action) => {
            state.status = 'success';
            state.items = action.payload;//ismenenia sochranaem
        },
        //3. Rejected => kohda assinchronnij sapros wipolnen s oschibkoj
        [fetchItems.rejected.type]: (state) => {
            state.status = 'error';
            state.items = [];//satschiaem pole
        }
    }
});

export const selectItemsData = (state: any) => state.items;

export const { setItems, setItem, setActiveType, setActiveSize } = itemsSlice.actions;

export default itemsSlice.reducer;



import { configureStore, createSlice } from '@reduxjs/toolkit';

//store obolotschka App schtobi infu ot detej k roditelam peredawatj

const counterSlice = createSlice({ //prinimaet w seba obj
    name: 'counter',
    initialState: { value: 0 },//otdelnij oj
    reducers: {//tosche obj
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})

export const { increment, decrement } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;

export const store = configureStore({//globalnoe sostojanie woswraschaem
    reducer: {
        counter: counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>//opisiwaet wes root state glawnij state, w rootState budet woswr type kotorij mi berem u state
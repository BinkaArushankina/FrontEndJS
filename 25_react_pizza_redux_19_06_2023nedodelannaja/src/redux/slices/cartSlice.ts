import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InterfaceItem  {//odna kartotschka, odin sakas
    id: string;
    name: string;
    count: number;
    price: number;
}

interface ICartState {
    totalPrice: number;
    items: any[];
}

const initialState: ICartState = {
    totalPrice: 0,//zena
    items: [],//towari
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state = initialState, action: PayloadAction<InterfaceItem>) {
            const findItem = state.items.find((item: InterfaceItem) => item.id === action.payload.id);//idem po itemam metodom find i ischem tot elm kotorij nam nuschen po id
            if (findItem) {//esli takoj elm estj uwelitsch kolwo, a esli net dobawl
                findItem.count++;
            } else {
                state.items.push({...action.payload, count: 1}); //witrachiwaem payload i 1
            }
            state.totalPrice = state.items.reduce(
                    (acc: number, item: any) => acc + item.price * item.count, 0 //acc po umoltschaniu = 0, potom posle perwogo sakasa acc rawen drugoj summe, i pribawlaetsa ko wtoromu sakasu
            );
        },
        incrementCount(state = initialState, action: PayloadAction<string>) {
            const findItem = state.items.find((item: InterfaceItem) => item.id === action.payload);
            if (findItem) {//esli takoj elm estj uwelitsch kolwo priplusowatj kolwo produkta +
                findItem.count++;
            };
            state.totalPrice = state.items.reduce(
                (acc, item) => acc + item.price * item.count, 0 //acc po umoltschaniu = 0, potom posle perwogo sakasa acc rawen drugoj summe, i pribawlaetsa ko wtoromu sakasu
        );
        },
        decrementCount(state = initialState, action: PayloadAction<string>) {
            const findItem = state.items.find((item: InterfaceItem) => item.id === action.payload);
            if (findItem && findItem.count >= 1) {//esli takoj elm estj, umenschit kolwo minusowatj kolwo produkta -
                findItem.count--;
            };
            state.totalPrice = state.items.reduce(
                (acc, item) => acc + item.price * item.count, 0 //acc po umoltschaniu = 0, potom posle perwogo sakasa acc rawen drugoj summe, i pribawlaetsa ko wtoromu sakasu
        );
        },
        removeAllItems(state) {
            state.items = [];
            state.totalPrice = 0;
        },
        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter(item => item.id !== action.payload);//peredaetsa info o id elm, i teper on rawen filtrazii, id elm ne rawen
            state.totalPrice = state.items.reduce(
                (acc, item ) => acc + item.price * item.count, 0
            );
        }
    }
});

export const selectCart = (state = initialState) => state;

export const selectCartItemById = (id: string) => (state: any) => state.cart.items.find((item: InterfaceItem) => item.id === id);

export const {
    addToCart,
    incrementCount,
    decrementCount,
    removeItem,
    removeAllItems
} = cartSlice.actions;

export default cartSlice.reducer;

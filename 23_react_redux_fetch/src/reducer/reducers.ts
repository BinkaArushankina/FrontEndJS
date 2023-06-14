import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IUser {// odin user, opisiwaem tip
    id: number;
    name: string
}

interface IUsersState {
    users: IUser[],//odin user
    currentPage: number,
}

const initialState: IUsersState = {//natschalnoe snatschenie
    users: [],//po umoltschaniu pustoj massiw
    currentPage: 1//natschalnaja str 1 
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        //opisiwaem Action prjamo sdes: tipisiruem (PajloadAction = action s nagruskoj tipa number)
        setPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        }
    }
})

export const {setPage} = userSlice.actions;
export default userSlice.reducer;
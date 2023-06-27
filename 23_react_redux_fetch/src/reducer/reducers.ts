import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// 3.5 Opisiwaem interface kastomnich suschnostej: IUser, IPost, IComment
interface IUser {// odin user, opisiwaem tip
    id: number;
    name: string
}

interface IPost {
    id: number;
    title: string
}

interface IComment {
    id: number;
    body: string
}

interface IPhoto {
    id: number;
    thumbnailUrl: string
}

// 3.4 Opisiwaem interface gloalnogo sostojania
export interface DataState {
    users: IUser[];//po umoltschaniu pustoj massiw
    posts: IPost[];
    comments: IComment[];
    photos: IPhoto[];
    currentPagePosts: number;//natschalnaja str 1 
    currentPageComments: number;
    currentPageUsers: number;
    currentPagePhotos: number;
    postsPerPage: number;
    commentsPerPage: number;
    usersPerPage: number;
    photosPerPage: number;
}

//3.3 opisiwaju startowoe snatschenie globalnogo sostojania, po umoltschaniu perwie 3  pusto 
const initialState: DataState = {//natschalnoe snatschenie
    users: [],
    posts: [],
    comments: [],
    photos: [],
    commentsPerPage: 10,
    photosPerPage: 10,
    usersPerPage: 10,
    postsPerPage: 10,// na odnoj stranize otobraschatj 10 postow
    currentPagePosts: 1,
    currentPageComments: 1,
    currentPageUsers: 1,
    currentPagePhotos: 1
}

//3.1 widelaem otdelno logiku tschasti(slice) priloschenia s opredelennimi instrumentami dlja raboti s etoj tschastju priloschenia
const dataSlice = createSlice({
    name: 'users',
    initialState,// esli key i value sowpadajut, moschno napisatj tolko 1 ras initialState: initialState,
    reducers: {
        //opisiwaem Action prjamo sdes: tipisiruem (PajloadAction = action s nagruskoj tipa number)
        setUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload
        },
        setPosts: (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload
        },
        setComments: (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload
        },
        setPhotos: (state, action: PayloadAction<IPhoto[]>) => {
            state.photos = action.payload
        },
        setCurrentPagePosts(state, action: PayloadAction<number>) {//menaet str priloschenia
            state.currentPagePosts = action.payload;
        },
        setCurrentPageComments(state, action: PayloadAction<number>) {//menaet str priloschenia
            state.currentPageComments = action.payload;
        },
        setCurrentPagePhotos(state, action: PayloadAction<number>) {//menaet str priloschenia
            state.currentPagePhotos = action.payload;
        }
    }
})

//3.2 exportiruju opisannie w slice instrumenti
export const {setCurrentPagePosts, setCurrentPageComments, setCurrentPagePhotos, setPhotos, setUsers, setComments, setPosts} = dataSlice.actions;
export default dataSlice.reducer;
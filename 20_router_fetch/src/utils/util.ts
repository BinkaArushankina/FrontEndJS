import { createContext } from "react";

export interface IUser {
    id: number;
    name: string;
    email: string;
}

export interface IPost {
    id: number;
    title: string;
    body: string;
}

export interface IComment {
    id: number;
    body: string;
}

//sosdaim utils schtobi petschatatj wes nabor dannich, kotorij nuschno budet peredawatj is App w dotschernij elm
export interface IAppData {
    users: IUser[];
    comments: IComment[];
    posts: IPost[];
}

//sosdaem kontext i exportiruem ego
//export const Context = createContext<IUser[]>([]);//tipisirowali tot kontext schto estj, eto massiw userow i wse

export const AppContext = createContext<IAppData | null>(null); //tipisirowali tot kontext schto estj, eto massiw wsego i userow i postow i commentow, po umoltschaniu null
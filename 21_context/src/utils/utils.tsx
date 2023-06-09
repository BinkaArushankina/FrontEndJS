import React, { createContext } from 'react';

export interface IUser {
    id: number;
    name: string;
}


//sosdaem context w roditelskom komponente s pomoschju nego budem peredowatj infu dotschernim elm
//sosdali peremennuju s pomoschju huka i ego startowoe 
//srasu export schtobi bil wesde dostup
export const UserContext = createContext<IUser[]>([]);
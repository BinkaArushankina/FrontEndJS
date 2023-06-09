import React, {useContext} from 'react';
import { AppContext, IUser } from '../utils/util';

//interface IUser {
//    id: number;
//    name: string;
//    email: string;
//}

const style = {
    backgroundColor: 'pink'
}

const Users: React.FC<{ users: IUser[] }> = ({ users }) => {//kaschdij komponent prinimaet parametri propsi, i otobraschaet infu, iteriruetsa
    console.log(users);

    //a eto primer bes rpopsow s kontextom pomeschaju w usersFromContext infu, peredannuju ot roditelskogo komponenta App
    //const usersFromContext: IUser[] = useContext(Context);// wot w etom meste mi ot roditela imeem dostup petschatatj wsju infuot wsech potomkow, w context.Provider w returne w app. w propsch ot rodiela k detam a wcontexte srasu wsem potomkam
    //console.log('info from context', usersFromContext);
    
    const dataFromAppContext = useContext(AppContext);
    const usersFromAppContext = dataFromAppContext?.users || [];

    return (//otobraschenie infi, tscheres map is context.Provider
        <>
            <h2>Users</h2>
            {usersFromAppContext.map(user => (
                <div style={style} key={user.id} className='user'>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </>
    );
};

export default Users;




   
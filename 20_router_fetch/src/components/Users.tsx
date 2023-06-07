import React from 'react';
import { IUser } from '../utils/util';

//interface IUser {
//    id: number;
//    name: string;
//    email: string;
//}

const style = {
    backgroundColor: 'pink'
}

const Users: React.FC<{ users: IUser[] }> = ({users }) => {//kaschdij komponent prinimaet parametri propsi, i otobraschaet infu, iteriruetsa
    console.log(users);
    return (//otobraschenie infi
        <>
            <h2>Users</h2>
            {users.map(user => (
                <div style={style} key={user.id} className='user'>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </>
    );
};

export default Users;




   
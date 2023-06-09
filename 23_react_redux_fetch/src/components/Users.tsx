import React from 'react';
import { useSelector } from 'react-redux';
import { DataState } from '../reducer/reducers';


const Users: React.FC = () => {
    // is globalnogo state polutschaju informaziu o polsowatelach i sochranaju ee
    const users = useSelector((state: {data: DataState}) => state.data.users);
    //dlja realisazii otobraschenia info nuschen wsegda map i eto wse w {} ,a wnutri, w () skobotschkach
    return (
        <>
            <h2>Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}

export default Users;
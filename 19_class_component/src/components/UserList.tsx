import React, { useEffect, useState } from "react";

interface IUsers {
    id: number,
    name: string,
    username: string, 
    email: string,
    address: {},
    phone: string,
    website: string,
    company: {},
}

const userList: React.FC = () => {  //otdaet jsx, posle wipolnenia opred dejstwij, pustj petschataetsa spisok polsowatelej
    
    const [users, setUsers] = useState<IUsers[]>([]); 
    useEffect(() => {
        console.log('hello, from useEffect. Iam here so a component');
        
    }, []);
    return(
        <div></div>
    );
}

export default userList;
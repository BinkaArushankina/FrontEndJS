import React, { useContext } from 'react';
import { UserContext } from '../utils/utils';

const SecondChild = () => {
    const users = useContext(UserContext);//imeju dostup do etogo ot App.tsx, newaschno skolko tam pokolenij
    console.log(users);
    
    return (
        <></>
    )
}

export default SecondChild;

//huki eto metodi reacta useState, useEffect, etapi schisn.zikla, 
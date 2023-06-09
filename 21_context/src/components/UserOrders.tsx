import React, {useContext} from 'react';
import { UserContext } from '../utils/utils';
import SecondChild from './SecondChild';


//hotelos bi polutschitj spisok Usersow i otobraschatj na etoj stranize
const UserOrders:React.FC = () => {
    //polsuemsa kontextom. w kotorom raspoloschena informazia ot roditelskogo komponente
    const users = useContext(UserContext)//otobraschaem s pomoschju etogo huka wsju infu ot roditela k wnutschatim
    //schtobi posle kaschdoj iterazii otobraschalsa html, to nuscho map, str 14
    return (//massiw ot roditela hoteli bi otobrasitj sdes
        <>
          <h2>UserOrder</h2>
            {users.map(user => (
                  <div key={user.id}>
                       <h3>User: {user.name}</h3>
                  </div>
             ))}
             <SecondChild />
        </>
     );
};
  //w otlitschie ot propsow(rod k detam) , Provider i huk use context moschet raspetschatiwatj infu na ekrane dasche ot wntschatich i dalee
  //App imeet infu o userach i woswr UserOrder, toest raspetschatatj na ekran
  //peredaem massiw dannich w Provider i on imeet dostup ko wsemu


export default UserOrders;
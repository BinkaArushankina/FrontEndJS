import React from 'react';
import './App.css';
import { IUser, UserContext } from './utils/utils';
import UserOrders from './components/UserOrders';

function App(){
  
  //sosdaem massiw i tipisiruem ego, dlja posledujuschej peredatschi dotschernim elm
  const users: IUser[] = [ // sosdali massiw users
      {id: 1, name: 'John Doe'},
      {id: 2, name: 'Jane Smith'},
      {id: 3, name: 'Mike Johnson'},
  ];


  //provider w atribute value peredaet infu users wsem dotschernim elm, i ljuboj dotschernij(wloschenij komponent) imeet dostup do peredawaemoj iformazii, ot providera sinu divu, i wnuku usersOrders
  //w otlitschie ot propsow(gde ot rod k detam) , Provider i huk use context moschet raspetschatiwatj infu na ekrane dasche ot wntschatich i dalee
  //App imeet infu o userach i woswr UserOrder, toest raspetschatatj na ekran
  //peredaem massiw dannich w Provider i on imeet dostup ko wsemu
  return ( 
    <UserContext.Provider value={users}>
      <h1>User App</h1>
      <div>
        <UserOrders />
      </div>
    </UserContext.Provider>
  );
};



export default App;

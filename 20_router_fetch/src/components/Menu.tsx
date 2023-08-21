import React from 'react';
import {Route} from 'react-router-dom';
import Users from './Users';
 
const Menu = () => {
    <Route path="/users" element={<Users users={users}/>}  />
}

export default Menu;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

const renderUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.users.users); //perwij users eto slice a wtoroj sami useri
    const currentPage = useSelector((state: RootState) => state.users.currentPage);
    const totalPages = Math.ceil(users.length / 10);//okruglenie w bolschuju storonu schtobi bilo 10 userow a ne 9,5 pri delenii tak kak tscheloweka moschet bitj tolko zeloe snatschenie

    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const currentUsers = users.slice(startIndex, endIndex);//ubrali poslednuju stranitschku

    return currentUsers.map(user => (
      <div key={user.id}>{user.name}</div>
    ))
  }
import React from 'react';
import './App.css';
import { useDispatch , useSelector} from 'react-redux';
import { RootState } from './store/store';
import { setPage } from './reducer/reducers';

function App() {
  const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.users.users); //perwij users eto slice a wtoroj sami useri
    const currentPage = useSelector((state: RootState) => state.users.currentPage);
    const totalPages = Math.ceil(users.length / 10);//okruglenie w bolschuju storonu schtobi bilo 10 userow a ne 9,5 pri delenii tak kak tscheloweka moschet bitj tolko zeloe snatschenie

  const handlePageChange = (page: number) => {//mi klikaem po tschisli a woswraschaem stranizu
    dispatch(setPage(page));
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

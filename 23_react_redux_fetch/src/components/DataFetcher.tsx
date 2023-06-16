import axios from 'axios';
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { store } from '../store/store';

const DataFetcher: React.FC<{endpoint: string, action: Function}> = ({endpoint, action}) => {//endpoint, action eto propsi
    const dispatch = useDispatch();//dlja ljubowo ismenenia globalnogo state proiswodim wnutri metoda dispatch;   metod wnutri kotorogo ja ismenaju state
  
    useEffect(() => {//polutschatj infu o userach o postach, poswoljajuschij rabotatj s schisnennim ziklom komponenta
        const fetchData = async () => {
            try {
                // bibli axios  --  CRUD => create / read / update / delete
                const response = await axios.get(endpoint);//peredaem useri ili posti ili commenti w endpoint
                dispatch(action(response.data));//action s toj datoj kotoruju mi polutschili
                console.log(store.getState());//schtobi website widnelsa
                
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [dispatch, endpoint, action])//esli pusto menaet tolko pri montirowanii, a esli ukaschem sa kotorimi nado sleditj, pri obnowlenii stranizi
  
    return null;
};

export default DataFetcher;
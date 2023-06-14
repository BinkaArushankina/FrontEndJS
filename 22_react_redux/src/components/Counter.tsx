import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState, increment, decrement} from '../store/store';

const Counter = () => {

  //dispatch - eto metod, wnutri kotorogo wipolnajutsa deistwia, swjasannie s ismeneniem globalnogo sostojania
  //Shodnij prinzip s hukom useState, gde tosche moschno ismenitj tolko s pomoschju spez metoda.
  const dispatch = useDispatch();//obolotschka ili metod wnutri kotoroj ispolsujutsa wse dejstwia kogda menaetsa state
  
  //s pomoschju useSelector polutschaem globalnoe sostojanie
  const counter = useSelector((state: RootState) => state.counter.value);

  //dispatch -> sluschatelj ismenenij RootState
  const handleIncrement = () => {//metod kotorij menaet tschislo
    dispatch(increment());//s pomoschju dispatcha i metoda increment ego
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

              //po clicku rabotaet metod po uwelitscheniu ili umenscheniu countera
    return (
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    );
};

export default Counter;
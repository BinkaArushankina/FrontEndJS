import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Counter1 from './components/FuncComponent';

function App() { //roditel (props peredaetsa ot roditela k rebenku(counter))  Peredatscha props peredaem kakujuta infu. props eto initialValue{100} Props sapisiwaetsa kak atributi tega
  return (
    <div className="App"> 
      <Counter initialValue={0} /> 
      <Counter initialValue={100}/>
      <Counter initialValue={10000}/>
      <Counter1 />
    </div>
  );
}

export default App;

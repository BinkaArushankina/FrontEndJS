import React, { useState } from "react";
const Counter: React.FC = () => { //do skobki schto prinimaet react functional a posle skobki schto woswr
    const [count, setCount] = useState<number>(0); // кортеж (массив, в котором заранее известны все элементы)
    // useState
    // React.useState()
    const [newCount, setNewCount] = useState(0);
    const [title, setTitle] = useState<string>('Counter App');
    const decrement = (): void => {  //woswraschaet void toestj nitschego
        // count--; Нельзя изменять значение переменной без соответствующего метода из useState. Иначе React не будет следить за изменением переменной
        setCount(count - 1); // изменяем значение переменной count
        // setCount((prevCount) => prevCount - 1) // возможность работы с актуальным (последним) значением переменной
    }
    const decrement10 = (): void => {
        setCount(count - 10);
    }

    //u react estj bolschoe kolwo saranee opisanich sobitij i html elm, sdes opisanni sobit onChange, poweschannoe na elm input
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewCount(+(event.target.value));//oschidaem sobitie change u elm input
    }
const handleClick = (): void => {
        setCount(newCount);
        setTitle(`Counter App with count: ${newCount}`);
    }
    return (
        <>
            <h1>{title}</h1>
            <p> Count: {count}</p>
            <input type="number" value={'' + newCount} onChange={handleChange}></input>
            <button onClick={handleClick}>Change count</button>
            <button onClick={() => setCount(count + 10)}> Increment10 </button> {/* increment => number + 1 */}
            <button onClick={() => setCount(count + 1)}> Increment </button> {/* increment => number + 1 */}
            <button onClick={decrement}> Decrement </button> {/* decrement => number - 1 */}
            <button onClick={decrement10}> Decrement10 </button> {/* decrement => number - 1 */}
        </>
    )
}
export default Counter









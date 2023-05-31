import React, { useState } from "react";

const Counter = () => {
    // let count = 0;

    const [count, setCount] = useState(0); {/* huk ili peremennaja sa kotoroj react budet sledit sa ism count i esli ona ismenitsa on eto budet s pomoschju metoda setCount propisiswatsa */}
    // kortesch eto massiw w kotorom saranee iswestni wse elm massiwa [count, setCount] kak naswali count i ego metod dlja ismeneneia mi pischem tem sche slowom no s peredi set i sadat tschemu isnatschalno rawen counter = 0
    // React.useState();

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <>
            <h2>Counter: {count}</h2>  {/* propisiwaem peremennuju tut ona budet*/}
            <button onClick={increment}>Increment</button> {/* increment +1 */}
            <button onClick={() => setCount(count - 1)}>Decrement</button> {/* decrement -1 */}
        </>
    );
};

export default Counter;
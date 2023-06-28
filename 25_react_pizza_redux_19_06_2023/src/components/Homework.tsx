import React, { useEffect, useRef } from 'react';

const Homework = () => {
    const inputRef = useRef<HTMLInputElement>(null);//input - ssilka, na kakoj elemnt ee powesim, do takogo elm udet dostup

    useEffect(() => {//kaschdij ras kogda straniza obnowlaetsa ili internet wikl. to ostaetsa podgruschennoe, a ostalnoe ne podgruschaetsa dalsche
       const savedValue = localStorage.getItem('myValue');//schto to podgruscheno?? smoschem dotanutsa
       if(savedValue && inputRef.current) {//esli smogli dotanutsa i inpute estj soderschimoe, to 
            inputRef.current.value = savedValue;//to pust soderschimoe inputa udet rawno podgeuschennomu
       }
    }, []);    

    const handleSave = () => { //dostawatj snatschenie kotoroe estj w input na dannij moment i sapisiwatj w localStorage
        const value = inputRef.current?.value ? inputRef.current?.value : '';//true value , false pustaja stroka
        localStorage.setItem('myValue', value);
    };    


  return (//powesili na input useRef
    <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleSave}>save</button>
    </div>
  )
}

export default Homework;

// "dependencies": {
//     библиотека для работы с redux, обновлённый вариант
//     "@reduxjs/toolkit": "^1.9.5",

//     библиотеки для тестирования
//     "@testing-library/jest-dom": "^5.16.5",
//     "@testing-library/react": "^13.4.0",
//     "@testing-library/user-event": "^13.5.0",

//     библиотеки для типизации при работе с typescript
//     "@types/jest": "^27.5.2",
//     "@types/node": "^16.18.36",
//     "@types/react": "^18.2.12",
//     "@types/react-dom": "^18.2.5",
//     "@types/react-redux": "^7.1.25",
//     "@types/react-router-dom": "^5.3.3",

//     библиотека для работы с запросами на сервер
//     "axios": "^1.4.0",

//     библиотека со всеми реактовскими инструментами
//     "react": "^18.2.0",

//     библиотека для работы с отображением информации о загрузке после начала запроса на сервер и до его окончания
//     "react-content-loader": "^6.2.1",

//     библиотека для работы с виртуальным деревом нашего проекта
//     "react-dom": "^18.2.0",

//     библиотека для связки react и redux
//     "react-redux": "^8.1.0",

//     библиотека для маршрутизации проекта
//     "react-router-dom": "^6.13.0",
//     create-react-app
//     "react-scripts": "5.0.1",

//     библиотека для управления глобальным состоянием
//     "redux": "^4.2.1",

//     Надстройка для языка программирования javascript для типизации данных в проекте
//     "typescript": "^4.9.5",
//     "web-vitals": "^2.1.4"
//   }







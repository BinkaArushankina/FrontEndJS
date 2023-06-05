/*
import React, { ChangeEvent, useState, MouseEvent } from 'react';
import './TodoList.css';

interface ITask {
    name: string,
    completed: boolean
}

const TodoList: React.FC = (): JSX.Element => {

    //React.useState
    //Array of all our tasksList eto variale peremennaja, a setTasksList eto metod s pomoschju kotorogo on raspetschatiwaetsa
    const [tasksList, setTasksList] = useState<string[]>([]);//useState dolschen importirowatsa nawerchu
    //Current task
    const [task, setTask] = useState<string>(''); //stroka wnutri massiwa tasks settasks
    const[check, setCheck] = useState<boolean>(false);

    //describe onChange for our input
    //opisanie eventa delaet widimim wse dostupnie pola ili metodi eventa
    const handleTaskNameChange = (e: ChangeEvent<HTMLInputElement>) => { //sluschatel sobitij change, sluschaet ismenenie inputa i rabotaet s inputom, sluschaet w html
        setTask(e.target.value); //is inputa sabiraem value, w inpute sobiraem ismenenie
    }

    //describe onClick for our button
    const handleAddTask = (e: MouseEvent<HTMLButtonElement>) => { //opisanie eventa delaet widimim wse dostupnie pola ili metodi eventa
        setTasksList((prev) => [...prev, task]); //berem prediduschee i dobawlaem nowoe
        setTask('');
    }

    const handleRemoveTask = (index: number): void => { //nado schtobi ne wse udalalos a tolko to schtp udalili
        const updatedTasks = [...tasksList]; //polnaja kopia masiwa lista
        updatedTasks.splice(index, 1);//udalim to schto neobchodimo is etogo lista
        //method splice : 1.udalaet is massiwa elm natschinaja s index, to schto peredaju perwim atributom, w kolitschestwe 1 schtuki
        //2. ismenaet ischodnij massiw(!); otschen waschno, poetomu mi i rabotaem s kopiej
        setTasksList(updatedTasks);//raspetschatiwaem to schto bes udalennogo
        //dlja etogo nuschno etot otdelnij metod , potomuschto nelsa ismenatj ischodnuju peremennuju is useState nikakim sposobom, krome metoda polutschennogo is togosche useState
        //setTasksList([...taskList].splice(index, 1));
    
    }

    const handleIsDone = (e: ChangeEvent<HTMLInputElement>) => {//podzepilis kakoe snatschenie estj w naschem dive
        setCheck(e.target.checked);
    };
    
    
    return (//powesili sobitie onChange(smotrit) na input onClick
        <div className='container'>
            <h1>Todo List App</h1>
            <input onChange={handleTaskNameChange} value={task} type="text" placeholder='Enter a task...' /> 
            <button onClick={handleAddTask}>Add Task</button>
            <ol id='taskList'> 
                {tasksList.map((task, index) => (  //massiw taska s pomoschju map wiwodim , wnaschem numerowonom spiske kaschdij element dobawlalsa w li s unikalnim indexom i tem schto wwedeno w input
                    <div key={index + 1} className='task'>
                    <li style={check ? { backgroundColor: 'green'} : {}}>
                        <span>{index + 1}. </span> 
                        {task}
                        <input type="checkbox"  id="isDone" onChange={handleIsDone}/>
                        <button onClick={() => handleRemoveTask(index)}>Remove</button>
                    </li> 
                    </div>//pri iterazii massiwa w sintaksise jsx neobchodimo sadawatj unikalnoe swojstwo key
                ))}
            </ol>
        </div>
    );
} 

export default TodoList;
*/

import React, { useState, ChangeEvent, MouseEvent } from "react";
import "./TodoList.css";

// описали содержимое task
interface ITask { //otedelnij tip dannich sosdali kak oolean ili string, sosdali itask
    name: string,
    completed: boolean
}

const TodoList: React.FC = (): JSX.Element => { //woswr react functional FC, a prinim elm jsx
    // React.useState ...
    // Array of all our tasks
    // Массив объектов(объекты типа ITask)
    const [tasksList, setTasksList] = useState<ITask[]>([]);
    // Current task
    // Объект типа ITask
    const [task, setTask] = useState<ITask>({name: '', completed: false});
    // boolean variable
    const [check, setCheck] = useState<boolean>(false); 
    //moschno tak, setCheck(!check) ,wsegda menaem na protiwopoloschnij check

    // task = {name: '', completed: false}; (неправильно)
    // setTask({name: '', completed: false}); (правильно)

    // describe onChange for our input
    // Описание event даёт возможность видеть все доступные поля и методы event
    const handleTaskNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        // По событию 'input' в task помещаем объект с необходимыми полями и значениями
        setTask({
            name: e.target.value,
            completed: false
        });
    };

    // describe onClick for our button
    // Описание event даёт возможность видеть все доступные поля и методы event
    const handleAddTask = (e: MouseEvent<HTMLButtonElement>) => {

        // В taskList помещаем все старые tasks плюс новый task
        //ismenenie lubogo useState, wasschno i nuschno
        setTasksList((prev) => [...prev, task]);  //...prev - kopia prediduschee snatschenie, plus nowoe snatschenie
        
        // Затираем task, scto input bil pustoj
        setTask({
            name: '',
            completed: false
        });
    };

    const handleRemoveTask = (index: number): void => {
        const updatedTasks = [...tasksList]; //operator spread, poswolaet sosdatj glubokuju kopiu massiwa
        // method splice:
        // 1. удаляет из массива элементы, начиная с index, в количестве 1;
        // 2. изменяет исходный массив(!);
        updatedTasks.splice(index, 1);
        setTasksList(updatedTasks);

        // setTasksList([...tasksList].splice(index, 1));

        /* 
            Нельзя изменять исходную переменную из useState никаким способом,
            кроме метода, полученного из того же useState
            tasksList.splice(index, 1);
            setTasksList(taskList);
        */
    };

    console.log('task = ', task);
    console.log('tasksList', tasksList);
    

    const handleIsDone = (e: ChangeEvent<HTMLInputElement>) => {
        // в переменную check кладём актульное значение поля checked у event.target
        setCheck(e.target.checked);
        // console.log(e);
        // Создаётся копия массива
        const copy = [...tasksList];
        
        // отфильтровали массив, оставили только тот элемент, на который кликнули
        const arr = tasksList.filter((task) => {
            return task.name === e.target.value
        })

        // Заменяем поле completed на актуальное значение
        arr[0].completed = e.target.checked;
        

        const index = copy.findIndex((task) => {
            return arr[0].name === task.name
        })

        copy[index] = arr[0];

        setTasksList(copy);
    }

    // console.log(tasksList);

    return (
        <div className="container">
            <h1>Todo List App</h1>
            <input
                onChange={handleTaskNameChange}
                value={task.name}
                type="text"
                placeholder="Enter a task..."
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ol id="taskList">
                {tasksList.map((task, index) => (
                    /* 
                       При итерации массива в синтаксисе jsx необходимо
                       задавать уникальное свойство key
                    */
                    <div key={index + 1} className="task">
                        <li style={task.completed ? { backgroundColor: 'green' } : {}}>
                            <span>{index + 1}. </span>
                            {task.name}
                            <input
                                type="checkbox"
                                id="isDone"
                                onChange={handleIsDone}
                                name="completed"
                                value={task.name}
                            />
                            <button onClick={() => handleRemoveTask(index)}>
                                Remove
                            </button>
                        </li>
                    </div>
                ))}
            </ol>
        </div>
    );
};

export default TodoList;
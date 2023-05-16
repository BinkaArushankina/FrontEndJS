const task = document.getElementById('taskInput'); //ssilki na element
const addTaskButton = document.getElementById('addTask');
const taskListUl = document.getElementById('taskList');

addTaskButton.addEventListener('click',  addTask);  //powesili sobitie dobawlenia taska
taskListUl.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') { //esli wiwod hotim udalit 
        console.log(e.target.parentElement);
    }
});

function addTask() {
    const taskName = task.value.trim();
    if (taskName) {
        const li = document.createElement('li');
        li.innerHTML = `<span><s>${taskName}<s/></span><checkbox>Done</checkbox>`;
        taskListUl.appendChild(li);        
    }
    task.value = ''; //posle kaschdogo klicka satiraem value w stroke wwoda otschischaem mesto
}




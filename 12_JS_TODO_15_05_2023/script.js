const task = document.getElementById('taskInput'); //ssilki na element
const addTaskButton = document.getElementById('addTask');
const taskListUl = document.getElementById('taskList');

addTaskButton.addEventListener('click',  addTask);  //powesili sobitie dobawlenia taska

addTaskButton.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        addTask;
    }
});

taskListUl.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') { //esli wiwod hotim udalit 
        e.target.parentElement.remove();
    }
    if (e.target.checked) {
        e.target.previousSibling.style.textDecoration = 'line-through black';
    } else {
        e.target.previousSibling.style.textDecoration = 'none';
    }
});

function addTask() {
    const taskName = task.value.trim();
    if (taskName) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskName}</span><input type="checkbox"><button>Delete</button>`;
        taskListUl.appendChild(li);        
    }
    task.value = ''; //posle kaschdogo klicka satiraem value w stroke wwoda otschischaem mesto
}




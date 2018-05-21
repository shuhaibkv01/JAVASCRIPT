//All the UI Variables definition
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//Method to load all the events handler
loadEventListerners();

function loadEventListerners() {
    //Event To List the tasks that are stored in the localstorage
    document.addEventListener('DOMContentLoaded', getTasks);

    //Add Tasks
    form.addEventListener('submit', addTask);

    //Remove event listener
    taskList.addEventListener('click', removeTask);

    //CLEAR TASK Enent
    clearBtn.addEventListener('click', clearTasks);

    //Filter tasks
    filter.addEventListener('keyup', filterTasks);
}


//Add Task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Please enter task before submitting.');
        return;
    }

    let li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    console.log(li);
    taskList.appendChild(li);
    storeTaskInLocalStorage(taskInput.value);

    //Clear Task Form
    taskInput.value = '';
    e.preventDefault();
};


//Store the task to local storage 
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') == null) {
        tasks = [];
    } else {
        //This will parse the string to object
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove Task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure do you want to delete')) {
            e.target.parentElement.parentElement.remove();
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }

};

//Remove the task from local storage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') == null) {
        tasks = [];
    } else {
        //This will parse the string to object
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach((task, index) => {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Clear Tasks
function clearTasks(e) {
    //  taskList.innerHTML = '';
    //Fast
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    clearTasksFromLocalStorage();
    e.preventDefault();
}

//Clear Tasks from local storage
function clearTasksFromLocalStorage() {
    localStorage.clear();
}

//Filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(
        (task) => {
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        }
    )
}


//Load the taks once the DOM loaded
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') == null) {
        tasks = [];
    } else {
        //This will parse the string to object
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(
        function (task) {
            let li = document.createElement('li');
            li.className = 'collection-item';
            li.appendChild(document.createTextNode(task));
            const link = document.createElement('a');
            link.className = 'delete-item secondary-content';
            link.innerHTML = '<i class="fa fa-remove"></i>';
            li.appendChild(link);
            console.log(li);
            taskList.appendChild(li);
        }
    );
}
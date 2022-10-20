import {Todos, Projects} from "./modules/todos";
import {openTodos, showForms, createProject, createTodo, defaultProject} from "./modules/DOM";

let todoID = 0
let projectsArray = []
let todosArray = []
let showTodos = [...document.getElementsByClassName('show')];
let closeTodos = [...document.getElementsByClassName('close')]
let todosContainer = [...document.getElementsByClassName('todosContainer')];

document.getElementById('createProject').onclick = () =>{
    let title = document.getElementById('projectTitle').value
    createProject(title)
    document.getElementById('newProjectForm').style.display = 'none'    
    document.getElementById('container').style.opacity = '1'
}

document.getElementById('createTodo').onclick = () =>{
    let title = document.getElementById('todoTitle').value
    let projectParent = document.getElementById('projectParent').value
    createTodo(title, projectParent, todoID)
    ++todoID 
    document.getElementById('newTodoForm').style.display = 'none'
    document.getElementById('container').style.opacity = '1'
}

document.getElementById('addAttribute').onclick = () =>{
    let description = document.getElementById('descriptionAttribute').value
    let priority = document.getElementById('priorityAttribute').value
    addAttributes(description, priority)
    document.getElementById('newTodoForm').style.display = 'none'
    document.getElementById('container').style.opacity = '1'
}
    

showForms()
openTodos();
createTodo()
createProject('Default')


export {projectsArray, todosArray, showTodos, closeTodos, todosContainer, todoID}

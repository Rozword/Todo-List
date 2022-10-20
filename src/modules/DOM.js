import { Todos, Projects } from "./todos";
import{projectsArray, showTodos, closeTodos, todosContainer, todoID} from "../index"


let openTodos = () =>{

    
    
    showTodos.forEach(function(show){
        let index = showTodos.indexOf(show)
        show.addEventListener('click', function(){
            console.log(todosContainer[index])
            todosContainer[index].style.display = 'block'
            closeTodos[index].style.display = 'block'
            show.style.display = 'none'
        })
    })    
    
    closeTodos.forEach(function(close){
        let index = closeTodos.indexOf(close)
        close.addEventListener('click', function(){
            console.log(todosContainer[index])
            todosContainer[index].style.display = 'none'
            showTodos[index].style.display = 'block'
            close.style.display = 'none'
            
        })
    })    
}


let showForms = () =>{
    let closeButtonsArray = [...document.getElementsByClassName('closeButton')]
    //let formsArray = [...document.getElementsByClassName('form')]
    closeButtonsArray.forEach(function(close){
        close.onclick = () =>{
            document.getElementById('newTodoForm').style.display = 'none'
            document.getElementById('newProjectForm').style.display = 'none'  
            document.getElementById('addAttributeForm').style.display = 'none'  
            document.getElementById('container').style.opacity = '1'
        }
    })

    document.getElementById('newProject').onclick = () =>{
        document.getElementById('newTodoForm').style.display = 'none'
        document.getElementById('newProjectForm').style.display = 'flex'
        document.getElementById('container').style.opacity = '0.4'        
        }    

    document.getElementById('newTodo').onclick = () =>{
        document.getElementById('newProjectForm').style.display = 'none'
        document.getElementById('newTodoForm').style.display = 'flex'
        document.getElementById('container').style.opacity = '0.4'  
        }    
    
}

//let defaultProject = () =>{    
  //  createProject(project.title)
   /* let container = document.getElementById('container')
    let projectDiv = document.createElement('div')
    let projectTitle = document.createElement('h2')
    let todosCount = document.createElement('h4')
    todosCount.setAttribute('id', `${project.title}TodosCount`)  
    let show = document.createElement('img')
    let close = document.createElement('img')
    let projectInfo = document.createElement('div')
    show.src = "icons/angle-small-right.svg"
    close.src = "icons/angle-small-down.svg"
    projectTitle.textContent = project.title
    todosCount.textContent = `${project.todosNumber} Todos in this project`
    container.appendChild(projectDiv)
    projectDiv.setAttribute('id', `${projectTitle.textContent}`)
    projectDiv.appendChild(projectInfo)    
    projectInfo.appendChild(projectTitle)
    projectInfo.appendChild(todosCount)
    projectInfo.appendChild(show)
    projectInfo.appendChild(close)    
    show.classList.add('show')
    showTodos.push(show)
    close.classList.add('close')
    closeTodos.push(close)
    projectInfo.classList.add('projectTitleDiv')
    let todos = document.createElement('div')
    todos.classList.add('todosContainer')
    let hi = document.createElement('h3')
    hi.textContent = 'hi'
    todos.appendChild(hi)  
    todosContainer.push(todos)
    projectDiv.appendChild(todos)
    openTodos()*/


let createProject = (title) =>{        
        if(title !== ''){
            let project = new Projects(title, 0)
            project.addProject() 
            let container = document.getElementById('container')
            let projectDiv = document.createElement('div')
            let projectTitle = document.createElement('h2')
            let todosCount = document.createElement('h4')
            todosCount.setAttribute('id', `${project.title}TodosCount`)  
            let show = document.createElement('img')
            let close = document.createElement('img')
            let projectInfo = document.createElement('div')
            show.src = "icons/angle-small-right.svg"
            close.src = "icons/angle-small-down.svg"
            projectTitle.textContent = project.title

            todosCount.textContent = `${project.todosNumber} Todos in this project`
            container.appendChild(projectDiv)
            projectDiv.setAttribute('id', `${projectTitle.textContent}`)
            projectDiv.appendChild(projectInfo)

            
            projectInfo.appendChild(projectTitle)
            projectInfo.appendChild(todosCount)
            projectInfo.appendChild(show)
            projectInfo.appendChild(close)

            
            show.classList.add('show')
            showTodos.push(show)
            close.classList.add('close')
            closeTodos.push(close)

            projectInfo.classList.add('projectTitleDiv')


            let todos = document.createElement('div')
            todos.classList.add('todosContainer')            

            todosContainer.push(todos)
            projectDiv.appendChild(todos)
            openTodos()            
        }
    }


let createTodo = (title, projectParent, todoID) =>{   
        if((title != '') && (projectParent != '')){
            let todo = new Todos(title, projectParent, todoID)
            let todoDiv = document.createElement('div')
            todoDiv.classList.add('todoDiv')
            todoDiv.setAttribute('id', `${todo.id}`)
            let todoTitle = document.createElement('h3')
            let titleAndButtonDiv = document.createElement('div')
            titleAndButtonDiv.classList.add('todoTitleDiv')
            todoTitle.textContent = todo.title

            todoDiv.appendChild(titleAndButtonDiv)
            titleAndButtonDiv.appendChild(todoTitle)

            todo.addTodo()

            projectsArray.forEach(function(project){
                if(projectParent === project.title){                                   
                    let lastChild = document.getElementById(`${project.title}`).lastChild;
                    lastChild.appendChild(todoDiv);
                    project.todosNumber += 1
                    project.todoCount()
                    
                };

            });
            let addButton = document.createElement('button')
            addButton.classList.add('add')
            addButton.textContent = 'Add'
            titleAndButtonDiv.appendChild(addButton)
            //addAttributesArray.push(add)
            todo.add = addButton
            todo.addAttribute()
                      
        };        
    };

let openAttributeForm = () => {
    document.getElementById('addAttributeForm').style.display = 'flex'
}

let addAttributes = (description, priority) =>{
    if((description != '') && (priority != '')){
        let attributesDiv = document.createElement('div')
    }


}




export{openTodos, showForms, createProject, createTodo, openAttributeForm}
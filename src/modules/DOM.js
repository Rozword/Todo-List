import {Todos, FeaturesButton} from "./todos"

//let studyMath = new Todos ('Study math', 'you need to study hard', '7/31/2022')
let todosArray = []
let addFeaturesArray = []
let idVariable = 0
let idNum


let addProjectEvent = () => {
    let addProjectForm = document.getElementById('addProjectForm');
    let addProject = document.getElementById('addProject')
    addProject.addEventListener('click', function(){        
        addProjectForm.style.display = 'flex'  
    })
    let closeProjectButton = document.getElementById('closeProjectButton')
    closeProjectButton.addEventListener('click', function(){
        addProjectForm.style.display = 'none' 
    })
    let enterProjectTitle = document.getElementById('enterProjectTitle')
    enterProjectTitle.addEventListener('click', function(){
        let projectsList = document.getElementById('projectsList')
        let projectTitle = document.getElementById('projectTitle')
        let newProjectDiv = document.createElement('div')
        let newProject = document.createElement('p')
        newProject.textContent = projectTitle.value
        newProjectDiv.classList.add('projectDiv')
        newProject.classList.add('project')
        projectsList.appendChild(newProjectDiv)
        newProjectDiv.appendChild(newProject)
        addProjectForm.style.display = 'none'
        projectTitle.value = ''
    })
}

let addTodoEvent = () => {       
    let addTodoForm = document.getElementById('addTodoForm');
    let addTodo = document.getElementById('addTodo')    
    let closeTodoButton = document.getElementById('closeTodoButton')
    let enterTodoTitle = document.getElementById('enterTodoTitle')    
    
    addTodo.addEventListener('click', function(){
        addTodoForm.style.display = 'flex'  
    })

    closeTodoButton.addEventListener('click', function(){
        addTodoForm.style.display = 'none' 
    })

    enterTodoTitle.addEventListener('click', function(){ 
        let projectsArray = [...document.getElementsByClassName('project')]  
        let todoTitle = document.getElementById('todoTitle')
        let projectChoice = document.getElementById('projectChoice')  
        console.log(projectChoice.value)          
        
        projectsArray.forEach(function(project){
            console.log(project)
            console.log(project.textContent) 
            if(project.textContent === projectChoice.value){   
                console.log(project) 
                console.log(project.textContent)       
                let todo = new Todos(todoTitle.value, idVariable)  
                let featuresButton = new FeaturesButton(false, idVariable)
                let newTodo = document.createElement('div')  
                let newTodoDiv = document.createElement('div')
                let id = document.createElement('div')
                id.setAttribute('id', `${idVariable}`)
                id.textContent = idVariable
                newTodoDiv.classList.add('todoDiv')
                let addFeatures = document.createElement('button')
                addFeatures.textContent = '+'
                addFeatures.classList.add('addFeatures')                
                newTodo.textContent = todo.title
                newTodo.classList.add('todo')      
                project.parentNode.appendChild(newTodoDiv)   
                newTodoDiv.appendChild(id)                                     
                newTodoDiv.appendChild(newTodo) 
                newTodoDiv.appendChild(addFeatures)                
                id.style.display = 'none'
                addTodoForm.style.display = 'none'                
                console.log(todo)   
                todoTitle.value = ''
                projectChoice.value = ''
                todosArray.push(todo)
                console.log(todosArray)
                addFeaturesArray.push(featuresButton)
                idVariable++
            }            

        })


      /*  for(let i=0; i<=projectsArray.length-1; i++){
            console.log(projectsArray[i])
            if ( projectsArray[i].textContent === projectChoice.value ){  
                
                //will need something diferent than the div.textConten
                let newTodoDiv = document.createElement('div')
                newTodoDiv.classList.add('todoDiv')
                let addFeatures = document.createElement('button')
                addFeatures.textContent = '+'
                addFeatures.classList.add('addFeatures')
                newTodo.textContent = todoTitle.value
                newTodo.classList.add('todo')                                
                projectsArray[i].appendChild(newTodoDiv)
                newTodoDiv.appendChild(newTodo) 
                newTodoDiv.appendChild(addFeatures)
                addTodoForm.style.display = 'none'
                todo = new Todos(`${todoTitle.value}`)
                todoTitle.value = ''
                projectChoice.value = ''
            }
        }*/
        
        addFeaturesEvent()
        
    })
}

let addFeatures = () =>{        
    let enterFeatures = document.getElementById('enterFeatures')
    let addFeaturesForm = document.getElementById('addFeaturesForm')

    let closeFeaturesButton = document.getElementById('closeFeaturesButton')
    closeFeaturesButton.addEventListener('click', function(){
        addFeaturesForm.style.display = 'none' 
    })
    enterFeatures.addEventListener('click', function(e){
        let todosDOMArray = [...document.getElementsByClassName('todo')] 
        let addFeaturesArray = [...document.getElementsByClassName('addFeatures')]
        
        for(let i=0; i <= todosDOMArray.length; i++){
            let idElement = document.getElementById(`${i}`)
            let todoResult = todosArray.find(obj => obj.id === idNum)
            
            console.log(idNum)
            console.log(todoResult)
            if(parseInt(idElement.textContent) === idNum){                
                console.log(todoResult.title)
                console.log(todosDOMArray[i].textContent)                
                todoResult.description = document.getElementById('description').value
                todoResult.dueDate = document.getElementById('dueDate').value
                //todosArray[i].priority = document.getElementById('priority').value
                todoResult.notes = document.getElementById('notes').value
                let description = document.createElement('div')
                description.textContent = todoResult.description
                let dueDate = document.createElement('div')
                dueDate.textContent = todoResult.dueDate
                //let priority = document.createElement('div')
                // priority.textContent = document.getElementById('priority').value
                let notes = document.createElement('div')
                notes.textContent = todoResult.notes
                let featuresDiv = document.createElement('div')
                featuresDiv.classList.add('featuresDiv')
                idElement.parentNode.insertBefore(featuresDiv, idElement.parentNode.children[2])
                featuresDiv.appendChild(description)
                featuresDiv.appendChild(dueDate)
                featuresDiv.appendChild(notes)
                
                
                //todosDOMArray[j].appendChild(priority)
                
                



                    /*if(document.getElementById('checklist') === true){
                    todosArray[i].checklist = true
                    }*/
                break
                }
            }

        })
            
        }
    

let addFeaturesEvent = () => {
    let addFeaturesForm = document.getElementById('addFeaturesForm')
    let featuresDOMButtonArray = [...document.getElementsByClassName('addFeatures')] //need for each    
    
    featuresDOMButtonArray.forEach(function(button){
        button.addEventListener('click', function(){        
            
            idNum = parseInt(this.parentNode.children[0].textContent)
            addFeaturesArray[parseInt(idNum)].clicked = true
            console.log(addFeaturesArray[parseInt(idNum)].clicked)
            console.log(idNum)
            console.log(this.parentNode.children[0].textContent)

            /*for(let i=0; i<featuresDOMButtonArray-1; i++){
                console.log(addFeaturesArray[i].clicked)
                if(this.parentNode.children[i].textContent === addFeaturesArray[i].id.toString()){
                    addFeaturesArray[i].clicked = true
                    console.log(addFeaturesArray[i].clicked)
                    console.log(this.parentNode.children[0].textContent)
                }               
            }*/
            addFeaturesForm.style.display = 'flex'
            
        })
    })
}

    


export{addProjectEvent, addTodoEvent, addFeatures,todosArray, addFeaturesEvent, idNum}




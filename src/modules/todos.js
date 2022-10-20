import{projectsArray, todosArray, showTodos, closeTodos, todosContainer} from "../index"
import{openAttributeForm} from "./DOM"

class Todos {
  constructor(title, projectParent, id, description, dueDate, priority, notes, checklist, add) {
    this.title = title;
    this.projectParent = projectParent
    this.id = id;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.add = add;
  }

  addTodo(){
    todosArray.push(this)
  }

  addAttribute(){
    this.add.onclick = () =>{
      openAttributeForm()
    }
  }
  
}

class Projects {
  constructor(title, todosNumber){
    this.title = title;
    this.todosNumber = todosNumber
  }

  addProject(){
    projectsArray.push(this)   
  }

  todoCount(){
    console.log(this)
    document.getElementById(`${this.title}TodosCount`).textContent = `${this.todosNumber} Todos in this project`    
  }
  

}

export { Todos, Projects };

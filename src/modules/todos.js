class Todos {
  constructor(title, id, description, dueDate, priority, notes, checklist) {
    this.title = title;
    this.id = id;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }
}
class FeaturesButton {
  constructor(clicked, id) {
    this.clicked = clicked;
    this.id = id;
  }
}
export { Todos, FeaturesButton };

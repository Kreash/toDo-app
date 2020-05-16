import { Task } from './../app.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() addTaskApp: EventEmitter<Task> = new EventEmitter<Task>();

  title = "";

  addTask(){
    if(this.title.trim()){
      const task: Task = {
        title: this.title,
        id: 1
      }
      this.addTaskApp.emit(task);
      this.title = "";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

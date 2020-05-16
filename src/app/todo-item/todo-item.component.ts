import { Task } from './../app.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() task: Task;
  @Output() deleteTask = new EventEmitter;

  toggle: boolean;

  deleteItem(){
    this.deleteTask.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

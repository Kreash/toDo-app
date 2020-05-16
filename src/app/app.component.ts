import { Component } from '@angular/core';

export interface Task {
  title: string;
  id?: number;
}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toDo-app';
  
  currentForm: string = 'Первая задача';

  tasks: Task[] = [
    {title: "Первая задача", id: 0},
    {title: "Вторая задача", id: 1},
    {title: "Третья задача", id: 2}
  ]

  addTaskApp(task){
    this.tasks.push(task);
  }

  deleteTask(inx) {
    this.tasks.splice(inx, 1);
    console.log(inx)
  }
}

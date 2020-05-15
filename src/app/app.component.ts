import { Component } from '@angular/core';

export interface Task {
  title: string;
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
    {title: "Первая задача"},
    {title: "Вторая задача"},
    {title: "Третья задача"}
  ]

  addTaskApp(task){
    this.tasks.push(task);
  }




}

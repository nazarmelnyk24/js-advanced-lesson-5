import { Component, OnInit } from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  public task: string = '';
  public taskList: Task[] = [
    {
      name: 'HTML5',
      isDone: false
    },
    {
      name: 'CSS3',
      isDone: false
    },
    {
      name: 'JavaScript',
      isDone: false
    }
  ];
  public validInput: boolean = true;

  constructor() { }

  ngOnInit(): void {}

  addTask() {
    if(this.task.trim().length > 0) {
      this.validInput = true;
      const newTask: Task = {
        name: this.task,
        isDone: false
      };
      this.taskList = [...this.taskList, newTask];
      this.task = '';
    } else {
      this.validInput = false;
    }
  }

  isDone(done: any) {
    this.taskList[done.i].isDone = done.value;
  }

  deleteTask(i: number) {
    this.taskList.splice(i, 1);
  }

  saveEditTask(task: any) {
    this.taskList[task.i].name = task.name;
  }

  setBorder() {
    return this.validInput === true ? '1px solid black' : '1px solid red';
  }

}

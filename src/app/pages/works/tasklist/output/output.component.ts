import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Input() taskList!: Task[];
  @Output() isDoneToggle = new EventEmitter();
  @Output() deleteTaskClick = new EventEmitter();
  @Output() saveEditTaskClick = new EventEmitter();

  public showEdit: boolean = false;
  public currentIndex!: number;
  public currentTaskName: string = '';
  public validInput: boolean = true;

  constructor() { }

  ngOnInit(): void {}

  isDone(value: boolean, i: number) {
    this.isDoneToggle.emit({value, i});
  }

  deleteTask(i: number) {
    this.deleteTaskClick.emit(i);
  }

  editTask(name: string, i: number) {
    this.showEdit = true;
    this.currentIndex = i;
    this.currentTaskName = name;
  }

  saveEditTask(name: string, i: number) {
    if (name.trim().length > 0) {
      this.validInput = true;
      this.showEdit = false;
      this.saveEditTaskClick.emit({name, i});
    } else {
      this.validInput = false;
    }
  }

  setBorder() {
    return this.validInput === true ? '1px solid black' : '1px solid red';
  }

}

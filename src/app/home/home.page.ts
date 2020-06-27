import { Component } from '@angular/core';
import {AppComponent} from '../app.component'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  taskName: any = '';
  taskList = [];

  constructor() {}

  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = '';
    }
  }

  addTaskByName(taskName) {
    if (taskName.length > 0) this.taskList.push(taskName);
  }

  deleteTask(index) {
    this.taskList.splice(index, 1);
  }

}

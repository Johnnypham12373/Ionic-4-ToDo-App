import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  @ViewChild('alanBtnEl', {static:false}) alanBtnComponent: ElementRef<HTMLAlanButtonElement>;
  taskName: any = '';
  taskList = [];

  constructor() {}

  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(this.taskName);
      this.taskName = '';
    }
  }

  addTaskByName(taskName) {
    if (taskName.length > 0) this.taskList.push(taskName)
  }

  deleteTask(name) {
    const i = this.taskList.indexOf(name);
    if (i > -1) {
      console.log(i);
      console.log(this.taskList);
      this.taskList.splice(i, 1);
      console.log(this.taskList);
    }
  }

  ngAfterViewInit(): void {
    this.alanBtnComponent.nativeElement.addEventListener('command', (data) => {
      const commandData = (<CustomEvent> data).detail;

      if(commandData.command === 'taskName') {
        console.log('In taskName')
        this.addTaskByName(commandData.name)
      }
      if(commandData.command === "deleteTask") {
        console.log('In taskName')
        this.deleteTask(commandData.name)
      }
    })
  }
}

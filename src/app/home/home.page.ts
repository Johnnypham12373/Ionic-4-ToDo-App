import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  @ViewChild('alanBtnEl', {static:false}) alanBtnComponent: ElementRef<HTMLAlanButtonElement>;
  taskName: any = '';
  taskList = [];

  constructor(private alertCtrl: AlertController) {}

  information() {
    this.alertCtrl.create({
      header: 'Commands',
      message: 'To add task: "Add Task: (your task)" <br/> To delete task: "Delete Task: (your task)"',
      buttons: [
        {
          text: 'Cancel'
        },
      ]
    }).then((alert) => {
      alert.present();
    });
  }
  addTask() {
    console.log(this.taskName);
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(this.taskName);
      this.taskName = '';
    }
  }

  addTaskByName(taskName) {
    if (taskName.length > 0) this.taskList.push(taskName)
  }
  

  deleteTask(index) {
    this.taskList.splice(index, 1);
  }

  deleteTaskByName(name) {
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
        this.deleteTaskByName(commandData.name)
      }
    })
  }
}

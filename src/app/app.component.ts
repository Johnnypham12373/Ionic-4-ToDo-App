import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import "@alan-ai/alan-button";
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomePage } from './home/home.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  @ViewChild('alanBtnEl', {static:false}) alanBtnComponent: ElementRef<HTMLAlanButtonElement>;
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(): void {
    this.alanBtnComponent.nativeElement.addEventListener('command', (data) => {
      const commandData = (<CustomEvent>data).detail;

      if(commandData.command === 'taskName') {
        new HomePage().addTaskByName(commandData.name)
        /**
         * This assumes that the script calls p.play({command: "taskName", name: "Task #1"})
         * when it wants this command activated. (or something similar for name like Task-A)
         * */
      }
    })
  }
}

import { Component, ElementRef, ViewChild } from '@angular/core';
import "@alan-ai/alan-button";
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomePage } from '../app/home/home.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
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
  taskName: any = '';
  ngAfterViewInit() {
    this.alanBtnComponent.nativeElement.addEventListener('command', (data) => {
        const commandData = (<CustomEvent>data).detail;
        
        if(commandData.command === 'taskName') {
          this.HomePage.addTask();
    }
  })
 }
}

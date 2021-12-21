import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  win: any = window;
  constructor() {
    this.win.cordova.plugins.HelloWorld.show('hhh', () => {}, () => {});
    console.log('Hello world');
  }
}

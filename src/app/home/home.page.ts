import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  win: any = window;

  constructor() {
    // // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    // this.plug.cordova.plugins.lastChristmas.show('hhh', function(){

    // // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    // }, function(){

    // });
    this.win.cordova.plugins.HelloWorld.show('hhh', () => {}, () => {});
    console.log('Hello world');
  }

}



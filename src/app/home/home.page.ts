import { Component, OnInit } from '@angular/core';
import { HelloWorld } from '@awesome-cordova-plugins/hello-world/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  win: any = window;

  constructor(private hello: HelloWorld) {
    // // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    // this.plug.cordova.plugins.lastChristmas.show('hhh', function(){

    // // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    // }, function(){

    // });
    // this.win.HelloWorld.show('Hello World', () => {}, () => {});
    // console.log('Hello world');
    this.hello.show('Hiiiii').then(res => {
      console.log(res);
    });
  }

}



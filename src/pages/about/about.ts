import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LogPage } from '../log/log';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  getSummary(){
  	this.navCtrl.push(LogPage);
  }

}

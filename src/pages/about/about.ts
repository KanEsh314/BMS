import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { LogPage } from '../log/log';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  Email = this.navParams.get('Email');

  constructor(public navCtrl: NavController , public navParams: NavParams) {

  }

  getSummary(){
  	this.navCtrl.push(LogPage);
  }

  Authentication(){
    this.navCtrl.pop(LoginPage);
  }

}

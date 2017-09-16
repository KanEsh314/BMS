import { Component } from '@angular/core';
import { NavController , NavParams , ModalController } from 'ionic-angular';
import { StationPage } from '../station/station';
import { TripPage } from '../trip/trip';
import { ReportPage } from '../report/report';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Email = this.navParams.get('Email');

  constructor(public navCtrl: NavController, public navParams: NavParams , public modalCtrl: ModalController) {

  }

  setStation(){
    this.navCtrl.push(StationPage);
  }

  createTrip(){
  	this.navCtrl.push(TripPage);
  }

  todayReport(){
  	this.navCtrl.push(ReportPage);
  }

  ionViewDidLoad(){
    console.log(this.Email);
  }

}

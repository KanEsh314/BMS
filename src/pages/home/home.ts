import { Component } from '@angular/core';
import { NavController , NavParams , ModalController } from 'ionic-angular';
import { StationPage } from '../station/station';
import { TripPage } from '../trip/trip';
import { ReportPage } from '../report/report';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Email = this.navParams.get('Email');
  Sta = '';

  constructor(public navCtrl: NavController, public navParams: NavParams , public modalCtrl: ModalController) {

  }

  setStation(){
    let stationData = this.modalCtrl.create(StationPage);
      stationData.onDidDismiss(Station => {
        this.Sta = Station;
      });
      stationData.present();
  }

  createTrip(){
  	this.navCtrl.push(TripPage);
  }

  todayReport(){
  	this.navCtrl.push(ReportPage);
  }

  Authentication(){
    this.navCtrl.pop(LoginPage);
  }

  ionViewDidLoad(){
    console.log()
  }

}

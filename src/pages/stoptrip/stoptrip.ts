import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

/**
 * Generated class for the StoptripPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stoptrip',
  templateUrl: 'stoptrip.html',
})
export class StoptripPage {

	date = new Date();
	timeEnds : String = new Date(this.date.getTime()-this.date.getTimezoneOffset()*60000).toISOString();
	trip : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpServices: HttpProvider, public storage: Storage, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  
  }

  getStop(){

  	let sData = {
  		arrival_time : this.timeEnds
  	}

  	this.httpServices.stopTrip(sData, this.trip).then(res => {
  		console.log(res);
  		this.toastCtrl.create({
      		message: 'Your files were successfully saved',
      		showCloseButton: true,
      		closeButtonText: 'Ok'
    	}).present();

  		this.navCtrl.push(HomePage);

  	}, (err) => {
  		console.log(err);
  		this.alertCtrl.create({
        	title: 'Check Internet Connection',
        	subTitle: 'Please Connect The Device To Nearest Wifi',
        	buttons: ['OK']
      	}).present();
  	});

  }

  ionViewDidLoad() {
  	
  	this.storage.get('data').then(res => {
  		this.trip = res.id;
  		console.log(res);
  	}, (err) => {
  		console.log(err);
  	});

  	console.log(this.timeEnds);
  }

}

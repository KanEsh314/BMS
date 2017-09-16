import { Component } from '@angular/core';
import { NavController , ToastController} from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController , public toastCtrl: ToastController) {

  }
}

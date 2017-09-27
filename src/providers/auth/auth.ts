import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

	public token : any;

  constructor(public http: Http , public storage: Storage) {
    console.log('Hello AuthProvider Provider');
  }

  //https://whispering-depths-29459.herokuapp.com/login

  checkAuthentication(){
 
    return new Promise((resolve, reject) => {
 
        //Load token if exists
        this.storage.get('token').then((value) => {
 
            this.token = value;
 
            let headers = new Headers();
            headers.append('Authorization', this.token);
 
            this.http.get('https://whispering-depths-29459.herokuapp.com/login', {headers: headers})
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                }); 
 
        });         
 
    });
 
  }
  

  login(loginData){

  	return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http.post('https://whispering-depths-29459.herokuapp.com/login', JSON.stringify(loginData), {headers: headers})
          .subscribe(res => {
 
            let data = res.json();
            this.token = data.token;
            this.storage.set('token', data.token);
            resolve(data);
 
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
 
    });
  }

  logout(){
    this.storage.set('token', '');
  }
}

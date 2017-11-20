import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: Http) {
    //console.log('Hello HttpProvider Provider');
  }

  getBus(){
  	return this.http.get("https://afternoon-chamber-55365.herokuapp.com/api/buses")
  	.map(res => res.json())
  }

  getStation(){
  	return this.http.get("https://afternoon-chamber-55365.herokuapp.com/api/stations")
  	.map(res => res.json())
  }

  getRoute(){
    return this.http.get("https://afternoon-chamber-55365.herokuapp.com/api/routes")
    .map(res => res.json())
  }

  getDriver(){
    return this.http.get("https://afternoon-chamber-55365.herokuapp.com/api/drivers")
    .map(res => res.json())
  }

  getReport(){
    return this.http.get("https://afternoon-chamber-55365.herokuapp.com/api/todaytrip")
    .map(res => res.json())
  }

  createTrip(cData){
    return new Promise((resolve, reject) =>{
      

      let headers = new Headers();
      headers.append('Content-Type','application/json');
      
      this.http.post('https://afternoon-chamber-55365.herokuapp.com/api/trips', JSON.stringify(cData), {headers: headers})
      .subscribe(res => {

        let data = res.json();
        resolve(data);
        //console.log(data);
      }, (err) => {
        reject(err);
      });
    });
  }

  createReport(rData){
    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type','application/json');

      this.http.post('https://afternoon-chamber-55365.herokuapp.com/api/tripreports', JSON.stringify(rData), {headers: headers})
      .subscribe(res => {

        let data = res.json();
        resolve(data);
        console.log(data)
      }, (err) => {
        reject(err);
      });
    });
  }

}

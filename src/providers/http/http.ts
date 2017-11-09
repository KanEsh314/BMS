import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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
}

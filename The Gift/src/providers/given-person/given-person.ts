import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GivenPersonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GivenPersonProvider {
  private API_URL = 'https://thegift-api.mybluemix.net';
  private givenPersonId;
  
  constructor(public http: Http) {
    
  }
  addDislike(prodid){
    return new Promise((resolve, reject) => {
      var data = {
        _id:this.givenPersonId,
        prodid: prodid
      };
 
      this.http.post(this.API_URL + '/givenperson/adddeslike', data)
        .subscribe((result: any) => {
          console.log(result.json());
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
  removeDeslike(prodid){
    return new Promise((resolve, reject) => {
      var data = {
        _id:this.givenPersonId,
        prodid: prodid
      };
 
      this.http.post(this.API_URL + '/givenperson/removedeslike', data)
        .subscribe((result: any) => {
          console.log(result.json());
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  addlike(prodid){
    return new Promise((resolve, reject) => {
      console.log(this.givenPersonId)
      var data = {
        givenPersonId:this.givenPersonId,
        prodid: prodid
      };
 
      this.http.post(this.API_URL + '/givenperson/addLike', data)
        .subscribe((result: any) => {
          console.log(result.json());
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
  removeLike(prodid){
    return new Promise((resolve, reject) => {
      var data = {
        _id:this.givenPersonId,
        prodid: prodid
      };
 
      this.http.post(this.API_URL + '/givenperson/removelike', data)
        .subscribe((result: any) => {
          console.log(result.json());
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
  setid(id){
    this.givenPersonId = id
  }
}

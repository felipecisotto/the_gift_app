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
   givenPersonId;
  
  constructor(public http: Http) {
    
  }

  getFavorites(){
    return new Promise((resolve, reject) =>{
      var favorites = {
        givenPersonId:this.givenPersonId
      };
      
      this.http.post(this.API_URL + '/givenperson/getgivenpersonbyid', favorites)
          .subscribe((result: any) => {
            console.log("melivitao",result.json());
            resolve(result.json());
          },
          (error) => {
            reject(error.json());
          });
    });
  }

  addDislike(prodid){
    return new Promise((resolve, reject) => {
      var data = {
        givenPersonId:this.givenPersonId,
        prodid: prodid
      };
 
      this.http.post(this.API_URL + '/givenperson/addDislike', data)
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
        givenPersonId:this.givenPersonId,
        prodid: prodid
      };
      console.log("datadata",data)
      this.http.post(this.API_URL + '/givenperson/removeDislike', data)
        .subscribe((result: any) => {
          console.log(result.json());
          resolve(result.json());
        },
        (error) => {
          console.log("rotaaa", error)
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
        givenPersonId:this.givenPersonId,
        prodid: prodid
      };
      console.log("data lock", data)
      this.http.post(this.API_URL + '/givenperson/removelike', data)
        .subscribe((result: any) => {
          console.log("result.json()",result.json());
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

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatProvider {
  private API_URL = 'http://localhost:6001'
  constructor(public http: Http) {}

  chat(context: {},text: string){
    return new Promise((resolve, reject) => {
      var data = {
        context: context,
        text: text
      };
 
      this.http.post(this.API_URL + '/chat/talk', data)
        .subscribe((result: any) => {
          console.log(result.json());
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BadgesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BadgesProvider {

   private _myValue = 0;

    getMyValue() {
        return this._myValue;
    }

    incrementMyValue(){
        this._myValue++;
    }

    decrementMyValue() {
        this._myValue--;
        return this._myValue;
    }

    setMyValue(heko) {
        this._myValue = heko;
        return heko;
    }

}

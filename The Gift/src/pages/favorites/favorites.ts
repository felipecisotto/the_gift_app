import { GivenPersonProvider } from './../../providers/given-person/given-person';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController, public navParams: NavParams, private givenPersonProvider: GivenPersonProvider) {
  }

  favorites


  ionViewWillEnter(){
      this.givenPersonProvider.getFavorites().then((result:any)=>{
         this.favorites = result.data.likes
      }).catch((error: any) => {
         console.log("erro", error)
       });
    
  }
  goBack() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
  deleteFavorite(id){
    console.log("id", id)
    console.log("given gambeta id",this.givenPersonProvider.givenPersonId)
     this.givenPersonProvider.removeLike(id)
     this.goBack(

     )
  }

  substr = (size, value) => {
    if (value && value.length > size) {
      return value.substr(0, size) + "...";
    }
    return value;
  }
}

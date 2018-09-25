import { GivenPersonProvider } from './../../providers/given-person/given-person';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private givenPersonProvider: GivenPersonProvider) {
  }

  favorites


  ionViewWillEnter(){
    // this.favorites = this.getFavorites()
    
      console.log("aquiiiiiiiiv1");
      this.givenPersonProvider.getFavorites().then((result:any)=>{
        console.log("walker",result.data)
         this.favorites = result.data.likes
      }).catch((error: any) => {
         console.log("erro", error)
       });
    
  }
   
  deleteFavorite(id){
    console.log("id", id)
    console.log("given gambeta id",this.givenPersonProvider.givenPersonId)
     this.givenPersonProvider.removeLike(id)
  }
    
  

}

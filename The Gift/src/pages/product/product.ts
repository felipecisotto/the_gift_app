import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';
import { GivenPersonProvider } from '../../providers/given-person/given-person';
import { BuyModalPage } from '../buy-modal/buy-modal'

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  product;
  favoriteProducts;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private productsService: ProductsProvider,
    private givenPerson:GivenPersonProvider,
    public modalCtrl: ModalController
  ) {
    this.product = this.navParams.get('product');
    //this.favoriteProducts = this.productsService.getFavoriteProducts();
  }

  ionViewDidLoad() {
  }

  goBack() {
    this.viewCtrl.dismiss();
  }

  favorite() {
    console.log(this.product._id)
    this.givenPerson.addlike(this.product._id)
    this.goBack();
  }

  likeDisabled() {
    //return this.favoriteProducts.filter(product => product.nome === this.product.nome).length;
    this.givenPerson.addDislike(this.product._id)
    this.goBack();
  }

openModal(){
  this.navCtrl.push(BuyModalPage);
}
// openModal(){
//   let profileModal = this.modalCtrl.create(BuyModalPage);
//   profileModal.present();
// }
reload(){
  window.location.reload();
}

}

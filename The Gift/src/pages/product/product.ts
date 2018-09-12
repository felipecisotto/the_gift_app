import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';

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
    private productsService: ProductsProvider
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
    this.favoriteProducts.push(this.product);
    //this.productsService.updateFavoriteProducts(this.favoriteProducts);
    this.goBack();
  }

  likeDisabled() {
    //return this.favoriteProducts.filter(product => product.nome === this.product.nome).length;
  }

}

import { ProductsProvider } from './../../providers/products/products';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private productsService: ProductsProvider) {
  }

  products

  ionViewDidLoad() {
    this.productsService.getProducts().subscribe(products => this.products = products)
  }

  onTap(event, product) {
    this.navCtrl.push(ProductPage, {
      product
    });
  }

}

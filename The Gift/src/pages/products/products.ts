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

  ionViewDidEnter() {
    this.products = this.productsService.getProducts()
    console.log(this.products)
  }

  onTap(event, product) {
    this.navCtrl.push(ProductPage, {
      product
    });
  }
  substr = function (size, value) {
    if (value && value.length > size) {
        return value.substr(0, size) + "...";
    }
    return value;
};

}

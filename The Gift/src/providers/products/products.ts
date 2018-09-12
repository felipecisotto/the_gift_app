// import { Observable } from 'rxjs/Observable';
// import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {

  //   constructor(public http: Http) {
  //     //console.log('Hello ProductsProvider Provider');
  //   }
  //   private products
  //   getProducts(){
  //     return this.products.map(res => res)
  //   }
  //   /*return this.http.get("assets/products.json")
  //       .map(res => res.json())*/
  //   setProducts(products){
  //     this.products.map(products => this.products = products)
  //     //this.products = products
  //     console.log(this.products)
  //   }/*
  //   getFavoriteProducts() {
  //     return JSON.parse(localStorage.getItem(PRODUCTS)) || [];
  //     //TODO: CHAMAR SERVICO PARA BUSCAR LISTA DOS PRODUTOS DO USUARIO
  //   }

  //   updateFavoriteProducts(products) {
  //     localStorage.setItem(PRODUCTS, JSON.stringify(products));
  //     //TODO: CHAMAR SERVICO PARA SALVAR NO MONGO  
  //   }
  // */
  private products;

  getProducts() {
    return this.products;
  }

  
  setProducts(products) {
    this.products = products;
    return products;
  }


}

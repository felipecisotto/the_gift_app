import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

const PRODUCTS = 'PRODUCTS';

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {

  constructor(public http: Http) {
    console.log('Hello ProductsProvider Provider');
  }

  getProducts(): Observable<any>{
    return this.http.get("assets/products.json")
      .map(res => res.json())
  }

  getFavoriteProducts() {
    return JSON.parse(localStorage.getItem(PRODUCTS)) || [];
    //TODO: CHAMAR SERVICO PARA BUSCAR LISTA DOS PRODUTOS DO USUARIO
  }

  updateFavoriteProducts(products) {
    localStorage.setItem(PRODUCTS, JSON.stringify(products));
    //TODO: CHAMAR SERVICO PARA SALVAR NO MONGO  
  }

}

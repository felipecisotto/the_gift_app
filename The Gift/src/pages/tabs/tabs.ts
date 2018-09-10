
import { Component } from '@angular/core';


import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProductsPage } from '../products/products';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProductsPage;
  tab3Root = ContactPage;

  constructor() {

  }
}

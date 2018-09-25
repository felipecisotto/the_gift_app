import { FavoritesPage } from './../favorites/favorites';

import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { Events } from 'ionic-angular';
import { BadgesProvider } from './../../providers/badges/badges';
import { ProductsPage } from '../products/products';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProductsPage;
  tab3Root = FavoritesPage;
  tab1BadgeCount;

  constructor(public events: Events,private badgesProvider: BadgesProvider) {

  }
 
}


import { Component } from '@angular/core';


import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Events } from 'ionic-angular';
import { BadgesProvider } from './../../providers/badges/badges';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProductsPage;
  tab3Root = ContactPage;
  tab1BadgeCount;

  constructor(public events: Events,private badgesProvider: BadgesProvider) {

  }
 
}

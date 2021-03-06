import { FavoritesPage } from './../pages/favorites/favorites';
import { ProductPage } from './../pages/product/product';
import { ProductsPage } from './../pages/products/products';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChatProvider } from '../providers/chat/chat';
import { HttpModule } from '@angular/http';
import { BadgesProvider } from '../providers/badges/badges';
import { ProductsProvider } from '../providers/products/products';
import { GivenPersonProvider } from '../providers/given-person/given-person';
import { BuyModalPage } from '../pages/buy-modal/buy-modal';

@NgModule({
  declarations: [
    MyApp,
    ProductsPage,
    HomePage,
    TabsPage,
    ProductPage,
    FavoritesPage,
    BuyModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProductsPage,
    HomePage,
    TabsPage,
    ProductPage,
    FavoritesPage,
    BuyModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChatProvider,
    BadgesProvider,
    ProductsProvider,
    GivenPersonProvider
  ]
})
export class AppModule {}

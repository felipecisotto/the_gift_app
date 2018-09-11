import { ProductPage } from './../pages/product/product';
import { ProductsPage } from './../pages/products/products';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChatProvider } from '../providers/chat/chat';
import { HttpModule } from '@angular/http';
import { BadgesProvider } from '../providers/badges/badges';
import { ProductProvider } from '../providers/product/product';

@NgModule({
  declarations: [
    MyApp,
    ProductsPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProductPage
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
    ContactPage,
    HomePage,
    TabsPage,
    ProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChatProvider,
    BadgesProvider,
    ProductProvider
  ]
})
export class AppModule {}

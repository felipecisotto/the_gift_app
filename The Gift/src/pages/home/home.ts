import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { ChatProvider } from './../../providers/chat/chat';
import { BadgesProvider } from './../../providers/badges/badges';
import { ProductsProvider } from './../../providers/products/products';
import { GivenPersonProvider } from './../../providers/given-person/given-person';
import { ProductsPage } from './../products/products'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private chats = [];
  @ViewChild(Content) contentArea: Content;
  private nickname = "Me";
  private context = {};
  private chat_input;
  private tags = [];
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController
             ,private chatProvider: ChatProvider
             ,private badgesProvider:BadgesProvider
             ,private productsProvider:ProductsProvider
             ,private givenPerson:GivenPersonProvider) {
    this.talk(null)
  }

  send(msg) {
    if (msg != null) {
      var message = { text: msg, from: "Me", created: new Date(), hasImage: false };
      this.chat_input = "";
      this.chats.push(message);
      this.tags = [];
      this.talk(msg);
      
    }
  }

  talk(msg) {
    this.chatProvider.chat(this.context, msg)
      .then((result: any) => {
        result.data.output.text.forEach((element, index, array) => {
          var hasImage = false;
          if (index === (array.length - 1)) {
             hasImage = true;

          }
          var message = { text: element, from: "Watson", created: new Date(), hasImage: hasImage };
          this.chats.push(message);
          
        });
        this.tags = result.data.context.tags;
        this.context = result.data.context;
        var badge  = result.data.products.length;
        this.badgesProvider.setMyValue(badge);
        this.productsProvider.setProducts(result.data.products)
        this.givenPerson.setid(result.data.context.givenPersonId)

        if(this.tags.length == 0){
          this.navCtrl.push(ProductsPage)
          } 
      })
      .catch((error: any) => {

      });
      
  }
  scrollToBottom() {
    if (this.content.scrollToBottom) {
       this.content.scrollToBottom();
    }
  } 


}

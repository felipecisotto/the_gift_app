import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { ChatProvider } from './../../providers/chat/chat';
import { BadgesProvider } from './../../providers/badges/badges';
import { ProductProvider } from './../../providers/product/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) contentArea: Content;
  private messages = [];
  private nickname = "Me";
  private chats = [];
  private context = {};
  private chat_input;
  private mutationObserver: MutationObserver;
  private tags = [];

  constructor(public navCtrl: NavController, private chatProvider: ChatProvider,private badgesProvider:BadgesProvider,private productProvider:ProductProvider) {
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
            var hasImage = true;

          }
          var message = { text: element, from: "Watson", created: new Date(), hasImage: hasImage };
          this.chats.push(message);
          
        });
        this.tags = result.data.context.tags;
        console.log(this.tags);
        this.context = result.data.context;
        var badge  = result.data.products.length;
        this.badgesProvider.setMyValue(badge);
        this.productProvider.setProducts(result.data.products)
        console.log(badge);

      })
      .catch((error: any) => {

      });
      

  }

}

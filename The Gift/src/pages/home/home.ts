import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ChatProvider } from './../../providers/chat/chat';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  messages = [];
  nickname = "Me";
  chats = [];
  context = {};
  chat_input;

  constructor(public navCtrl: NavController, private chatProvider: ChatProvider) {
    this.talk(null)
  }

  send(msg) {
    if (msg != null) {
      var message = { text: msg, from: "Me", created: new Date(),hasImage:false };
      this.chat_input = "";
      this.chats.push(message);
      this.talk(msg);
    }
  }

  talk(msg) {
    this.chatProvider.chat(this.context, msg)
      .then((result: any) => {
        result.data.output.text.forEach((element,index,array) => {
          var hasImage = false;
          if (index === (array.length-1)){
            var hasImage = true;
            
          }
          var message = { text: element, from: "Watson", created: new Date(),hasImage: hasImage };
          console.log(message.hasImage);
          this.chats.push(message);

        });
        this.context = result.data.context;

      })
      .catch((error: any) => {

      });


  }



}

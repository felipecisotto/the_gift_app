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
  nickname = "Felipe";
  chats = [];
  context = {};
  chat_input;
  
  constructor(public navCtrl: NavController, private chatProvider: ChatProvider) {
    this.talk(null)
  }

  send(msg){
    var message = {text: msg, from: "Felipe", created: new Date()}; 
    this.chat_input = "";
    this.chats.push(message);     
    this.talk(msg); 
  }

  talk(msg) {
    this.chatProvider.chat(this.context,msg)
    .then((result: any) => {
      result.data.output.text.forEach(element => {
        var message = {text: element, from: "Watson", created: new Date()}; 
        this.chats.push(message);     
      });
      this.context = result.data.context;
      
    })
    .catch((error: any) => {
      
    });


}



}

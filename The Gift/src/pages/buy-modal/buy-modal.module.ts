import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuyModalPage } from './buy-modal';

@NgModule({
  declarations: [
    BuyModalPage,
  ],
  imports: [
    IonicPageModule.forChild(BuyModalPage),
  ],
})
export class BuyModalPageModule {}

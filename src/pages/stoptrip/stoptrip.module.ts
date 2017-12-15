import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoptripPage } from './stoptrip';

@NgModule({
  declarations: [
    StoptripPage,
  ],
  imports: [
    IonicPageModule.forChild(StoptripPage),
  ],
})
export class StoptripPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurnoffPageRoutingModule } from './turnoff-routing.module';

import { TurnoffPage } from './turnoff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurnoffPageRoutingModule
  ],
  declarations: [TurnoffPage]
})
export class TurnoffPageModule {}

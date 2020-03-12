import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurnoffPage } from './turnoff.page';

const routes: Routes = [
  {
    path: '',
    component: TurnoffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurnoffPageRoutingModule {}

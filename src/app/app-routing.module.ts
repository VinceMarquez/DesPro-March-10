import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'main', loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },  {
    path: 'wifi',
    loadChildren: () => import('./wifi/wifi.module').then( m => m.WifiPageModule)
  },
  {
    path: 'turnoff',
    loadChildren: () => import('./turnoff/turnoff.module').then( m => m.TurnoffPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

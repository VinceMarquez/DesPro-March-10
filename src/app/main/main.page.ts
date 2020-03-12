import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage{

  constructor(private openNativeSettings: OpenNativeSettings, private router: Router) { }
  
  startmotorcycle(){
    this.router.navigate(['turnoff']);
    }
  
  gotohome(){
    this.router.navigate(['home']);
  }

  gotowifi(){
    this.router.navigate(['wifi']);
  }

  open(setting:string){
    this.openNativeSettings.open(setting).then(val => {
    })
  }
    
    
}
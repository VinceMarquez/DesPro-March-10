import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage{

  constructor(private openNativeSettings: OpenNativeSettings, private router: Router, public alertController: AlertController) { }
  
  startmotorcycle(){
    this.router.navigate(['turnoff']);
    }
  
  inputpassword(){

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
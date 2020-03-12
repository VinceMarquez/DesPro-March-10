import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';
import { Platform } from '@ionic/angular'

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.page.html',
  styleUrls: ['./wifi.page.scss'],
})
export class WifiPage {
  networks:HotspotNetwork[]=[];

  constructor(private router:Router, public platform:Platform, public hotspot:Hotspot) 
  { 
    this.platform.ready().then(()=>{
      this.hotspot.scanWifi().then((networks:HotspotNetwork[])=>{
        this.networks = networks;
      })
    })
  }

  gotomain() {
    this.router.navigate(['main']);
  }

}

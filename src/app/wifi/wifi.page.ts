import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.page.html',
  styleUrls: ['./wifi.page.scss'],
})
export class WifiPage {

  constructor(private router: Router) { }

  gotomain() {
    this.router.navigate(['main']);
  }

}

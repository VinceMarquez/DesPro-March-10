import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turnoff',
  templateUrl: './turnoff.page.html',
  styleUrls: ['./turnoff.page.scss'],
})
export class TurnoffPage{

  constructor(private router: Router) { }

  turnoff(){
      this.router.navigate(['main']);
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage{

  constructor(private router: Router) { }
  
  buttonclick(){
    alert("VROOM VROOM");
    }
  
  gotohome(){
    this.router.navigate(['home']);
  }
    
    
}
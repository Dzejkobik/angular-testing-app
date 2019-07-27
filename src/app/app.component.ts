import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.isLoggedIn();
  }
   constructor(private authService : AuthService) {}

  isUserLoggedIn : boolean = false;

   isLoggedIn() {
     this.isUserLoggedIn = this.authService.isLoggedIn();
   }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router) { }

  info : string = "";
  ngOnInit() {
    this.http.get("http://localhost:54904/api/users/getInfo")
      .subscribe(
        (value) => { this.info = value.toString()},
        (error) => { window.location.reload()}
      );
  } 
}

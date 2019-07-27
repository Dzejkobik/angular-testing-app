import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  info : string = "";
  ngOnInit() {
    this.http.get("http://localhost:54904/api/users/getInfo")
      .subscribe(res => this.info = res.toString());
  } 
}

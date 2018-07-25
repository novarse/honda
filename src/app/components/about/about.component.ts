import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  
  doHello() {
    let date = new Date();
    this.http.get('http://localhost:8080/rest/greeting-javaconfig?name=' + date).subscribe(data => {
      console.log('payload: ' + data); 
    });
  }
  

}

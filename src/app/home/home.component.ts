import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemImageUrl='./../assets/images/gallery/rome7.jpg';
  constructor() { }
  ngOnInit() {
  }
}

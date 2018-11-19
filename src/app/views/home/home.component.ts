import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  items = [
      {
        name: 'Aesthetics'
      },
      {
        name: 'Aesthetics2'
      },
      {
        name: 'Aesthetics3'
      },
      {
        name: 'Aesthetics4'
      },
      {
        name: 'Aesthetics5'
      },
      {
        name: 'Aesthetics6'
      },
  ];

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.page.html',
  styleUrls: ['./pro.page.scss'],
})
export class ProPage implements OnInit {
  constructor(private location: Location) {
   }
   
  ngOnInit() {
  }

  myBackButton()
  {
    this.location.back();
  }

}

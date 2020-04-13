import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-simple-present',
  templateUrl: './simple-present.page.html',
  styleUrls: ['./simple-present.page.scss'],
})
export class SimplePresentPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  myBackButton()
  {
    this.location.back();
  }

}

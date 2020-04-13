import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-adjective',
  templateUrl: './adjective.page.html',
  styleUrls: ['./adjective.page.scss'],
})
export class AdjectivePage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  myBackButton()
  {
    this.location.back();
  }

}

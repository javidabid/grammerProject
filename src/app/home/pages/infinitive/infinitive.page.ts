import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-infinitive',
  templateUrl: './infinitive.page.html',
  styleUrls: ['./infinitive.page.scss'],
})
export class InfinitivePage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  myBackButton()
  {
    this.location.back();
  }

}

import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-future-tense',
  templateUrl: './future-tense.page.html',
  styleUrls: ['./future-tense.page.scss'],
})
export class FutureTensePage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  myBackButton()
  {
    this.location.back();
  }

}

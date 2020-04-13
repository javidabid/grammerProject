import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-sentece',
  templateUrl: './sentece.page.html',
  styleUrls: ['./sentece.page.scss'],
})
export class SentecePage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  myBackButton()
  {
    this.location.back();
  }

}

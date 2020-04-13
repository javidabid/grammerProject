import {Component, OnInit } from '@angular/core';

import {Location} from '@angular/common';
@Component({
  selector: 'app-intonation',
  templateUrl: './intonation.page.html',
  styleUrls: ['./intonation.page.scss'],
})
export class IntonationPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  myBackButton() {
    this.location.back();
  }

}

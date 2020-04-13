import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-adverb',
  templateUrl: './adverb.page.html',
  styleUrls: ['./adverb.page.scss'],
})
export class AdverbPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  myBackButton()
  {
    this.location.back();
  }

}

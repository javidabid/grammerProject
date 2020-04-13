import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-nouns',
  templateUrl: './nouns.page.html',
  styleUrls: ['./nouns.page.scss'],
})
export class NounsPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  myBackButton() {
    this.location.back();
  }


}

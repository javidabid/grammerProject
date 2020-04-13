import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-comma',
  templateUrl: './comma.page.html',
  styleUrls: ['./comma.page.scss'],
})
export class CommaPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  myBackButton()
  {
    this.location.back();
  }

}

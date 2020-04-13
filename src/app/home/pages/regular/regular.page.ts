import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-regular',
  templateUrl: './regular.page.html',
  styleUrls: ['./regular.page.scss'],
})
export class RegularPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  myBackButton()
  {
    this.location.back();
  }

}

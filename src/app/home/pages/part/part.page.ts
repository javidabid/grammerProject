import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-part',
  templateUrl: './part.page.html',
  styleUrls: ['./part.page.scss'],
})
export class PartPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  myBackButton()
  {
    this.location.back();
  }

}

import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.page.html',
  styleUrls: ['./conditional.page.scss'],
})
export class ConditionalPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  myBackButton()
  {
    this.location.back()
  }
}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-gerund',
  templateUrl: './gerund.page.html',
  styleUrls: ['./gerund.page.scss'],
})
export class GerundPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  myBackButton()
  {
    this.location.back();
  }

}

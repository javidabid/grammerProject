import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-tobe',
  templateUrl: './tobe.page.html',
  styleUrls: ['./tobe.page.scss'],
})
export class TobePage implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  myBackButton()
  {
    this.location.back();
  }

}

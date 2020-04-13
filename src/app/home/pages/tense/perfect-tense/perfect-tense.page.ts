import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-perfect-tense',
  templateUrl: './perfect-tense.page.html',
  styleUrls: ['./perfect-tense.page.scss'],
})
export class PerfectTensePage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  myBackButton()
  {
    this.location.back();
  }

}

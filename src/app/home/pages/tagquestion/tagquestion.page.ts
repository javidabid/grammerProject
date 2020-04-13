import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-tagquestion',
  templateUrl: './tagquestion.page.html',
  styleUrls: ['./tagquestion.page.scss'],
})
export class TagquestionPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  myBackButton()
  {
    this.location.back();
  }

}

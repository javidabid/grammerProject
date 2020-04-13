import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-phonetics',
  templateUrl: './phonetics.page.html',
  styleUrls: ['./phonetics.page.scss'],
})
export class PhoneticsPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  myBackButton() {
    this.location.back();
  }

}

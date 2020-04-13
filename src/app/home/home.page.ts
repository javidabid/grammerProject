import { Component} from '@angular/core';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';


import {AdMobFree, AdMobFreeBannerConfig} from '@ionic-native/admob-free/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private popoverCtrl: PopoverController, private route: Router, public adMob: AdMobFree) {
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-9356179329616222/3544410374',
      isTesting: false,
      autoShow: true
     };
    this.adMob.banner.config(bannerConfig);
    this.adMob.banner.prepare()
       .then(() => {
         // banner Ad is ready
         // if we set autoShow to false, then we will need to call the show method here
       })
       .catch(e => console.log(e));
  }
  async openLanguagePopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

  gotoComma() {
    this.route.navigate(['/comma']);
  }

  gotoIntonation() {
    this.route.navigate(['/intonation']);
  }

  gotoInfinitive() {
    this.route.navigate(['/infinitive']);
  }

  gotoNoun() {
    this.route.navigate(['/nouns']);
  }

  gotoGender() {
    this.route.navigate(['/gender']);
  }

  gotoPart() {
    this.route.navigate(['/part']);
  }

  gotoSentence() {
    this.route.navigate(['/sentece']);
  }

  gotoPro() {
    this.route.navigate(['/pro']);
  }

  gotoTense() {
    this.route.navigate(['/tense']);
  }

  gotoAdjective() {
    this.route.navigate(['/adjective']);
  }

  gotoConditional() {
    this.route.navigate(['/conditional']);
  }

  gotoTagquestion() {
    this.route.navigate(['/tagquestion']);
  }

  gotoRegular() {
    this.route.navigate(['/regular']);
  }

  gotoGerund() {
    this.route.navigate(['/gerund']);
  }

  gotoTobe() {
    this.route.navigate(['/tobe']);
  }
}

import { Component } from '@angular/core';
import { NavController, Tab } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  TbPage = TabsPage

  constructor(public navCtrl: NavController) {

  }
  onGoToDetail() {
    this.navCtrl.push(this.TbPage);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Car1Page } from '../car1/car1';
import { Car2Page } from '../car2/car2';
import { Car3Page } from '../car3/car3';
import { Car4Page } from '../car4/car4';
import { Car5Page } from '../car5/car5';
import { Car6Page } from '../car6/car6';
import { Car7Page } from '../car7/car7';
import { Car8Page } from '../car8/car8';
import { Car9Page } from '../car9/car9';
import { Car10Page } from '../car10/car10';


/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  Cr1=Car1Page
  Cr2=Car2Page
  Cr3=Car3Page
  Cr4=Car4Page
  Cr5=Car5Page
  Cr6=Car6Page
  Cr7=Car7Page
  Cr8=Car8Page
  Cr9=Car9Page
  Cr10=Car10Page
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  onGoToCar1() {
    this.navCtrl.push(this.Cr1);
  }
  onGoToCar2() {
    this.navCtrl.push(this.Cr2);
  }
  onGoToCar3() {
    this.navCtrl.push(this.Cr3);
  }
  onGoToCar4() {
    this.navCtrl.push(this.Cr4);
  }
  onGoToCar5() {
    this.navCtrl.push(this.Cr5);
  }
  onGoToCar6() {
    this.navCtrl.push(this.Cr6);
  }
  onGoToCar7() {
    this.navCtrl.push(this.Cr7);
  }
  onGoToCar8() {
    this.navCtrl.push(this.Cr8);
  }
  onGoToCar9() {
    this.navCtrl.push(this.Cr9);
  }
  onGoToCar10() {
    this.navCtrl.push(this.Cr10);
  }
}

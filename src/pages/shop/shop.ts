import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BuyoutPage} from "../buyout/buyout";

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  constructor(public navCtrl: NavController) {}

  onBuyItem(itemName: string) {
    this.navCtrl.push(BuyoutPage, {itemName: itemName});
  }

}

import {NavController, NavParams} from "ionic-angular";
import {Component} from "@angular/core";

@Component({
  templateUrl: 'buyout.html',
  selector: 'page-buyout'
})
export class BuyoutPage {

  itemName: string;

  constructor(private navController: NavController, public navParams: NavParams) {}

  ngOnInit(): void {
    this.itemName = this.navParams.get("itemName");
  }

  onGoHome() {
    this.navController.popToRoot();
  }

}

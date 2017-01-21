import { Component } from '@angular/core';
import {UsersPage} from "../users/users";
import {ShopPage} from "../shop/shop";
import {BuyoutPage} from "../buyout/buyout";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usersPage = UsersPage;
  shopPage = ShopPage;
  buyoutPage = BuyoutPage;


}

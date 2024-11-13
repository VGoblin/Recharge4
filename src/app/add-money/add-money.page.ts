import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.page.html',
  styleUrls: ['./add-money.page.scss'],
})
export class AddMoneyPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToBankTransfer() {
    this.route.navigate(['./bank-transfer']);
  }

  goToPay() {
    this.route.navigate(['./bank-transfer']);
  }

  goToCardPayment() {
    this.route.navigate(['./bank-transfer']);
  }
}

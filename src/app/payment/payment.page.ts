import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  TripInfo() {
    this.route.navigate(['./trip-info']);
  }
  pool_taker_request() {
    this.route.navigate(['./pool-taker-request']);
  }
  list_of_pooler() {
    this.route.navigate(['./list-of-pooler']);
  }

  airtime() {
    this.route.navigate(['./tabs/payment/airtime']);
  }

  tv () {
    this.route.navigate(['./tabs/payment/tv']);
  }

  send_money () {
    this.route.navigate(['./tabs/payment/send-money']);
  }

  electricity () {
    this.route.navigate(['./tabs/payment/electricity']);
  }

  lottery () {
    this.route.navigate(['./tabs/payment/lottery']);
  }

  utility () {
    this.route.navigate(['./tabs/payment/utility']);
  }
}

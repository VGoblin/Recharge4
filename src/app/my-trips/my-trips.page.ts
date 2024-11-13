import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.page.html',
  styleUrls: ['./my-trips.page.scss'],
})
export class MyTripsPage implements OnInit {

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
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pool-taker-request',
  templateUrl: './pool-taker-request.page.html',
  styleUrls: ['./pool-taker-request.page.scss'],
})
export class PoolTakerRequestPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  poolTakerInfo() {
    this.route.navigate(['./pool-taker-info']);
  }
  ride_accepted() {
    this.route.navigate(['./ride-accepted']);
  }
}

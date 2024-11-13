import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {
  constructor(private route: Router) { }

  ngOnInit() {
  }

  verify() {
    this.route.navigate(['./tabs/home']);
  }

  report() {
    this.route.navigate(['./tabs/home']);
  }

  security() {
    this.route.navigate(['./tabs/home']);
  }

  referrals() {
    this.route.navigate(['./tabs/home']);
  }

  help() {
    this.route.navigate(['./tabs/home']);
  }

  faq() {
    this.route.navigate(['./tabs/home']);
  }
}

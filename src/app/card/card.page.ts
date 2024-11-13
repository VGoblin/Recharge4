import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})

export class CardPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  link_card() {
    this.route.navigate(['./tabs/home']);
  }

  gift_card() {
    this.route.navigate(['./tabs/home']);
  }

  virtual_card() {
    this.route.navigate(['./tabs/home']);
  }
}

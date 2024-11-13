import { Component, OnInit } from '@angular/core';
import { MyEvent } from 'src/services/myevent.services';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular'
declare var anime: any;

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  countries = new Array<any>();
  constructor(private myEvent: MyEvent, private route: Router, private navCtrl: NavController) {
    this.myEvent.getCountries().subscribe(res => this.countries = res);
  }
  ngOnInit() {
  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      this.route.navigate(['./sign-in']);
    }, 1500);
  }
}

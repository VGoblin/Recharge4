import { Component, OnInit, ViewChild } from '@angular/core';
import { MyEvent } from 'src/services/myevent.services';
import { Router } from '@angular/router';
import { NavController, IonDatetime, IonSlides } from '@ionic/angular'
declare var anime: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  countries = new Array<any>();
  segment = 0;
  @ViewChild('slides', { static: true }) slider: IonSlides;

  constructor(private myEvent: MyEvent, private route: Router, private navCtrl: NavController) {
    this.myEvent.getCountries().subscribe(res => this.countries = res);
  }
  ngOnInit() {
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
  
  continue() {
    this.route.navigate(['./tabs']);
  }
  verification() {
    this.route.navigate(['./verification']);
  }

  forget_password() {
    this.route.navigate(['./reset']);
  }
  
  ngAfterViewInit(): void {
    anime.timeline({ loop: false })
      .add({
        targets: '.logo .logo_img',
        delay: (el, i) => 1000 * i,
        scale: [50, 1],
        opacity: [0, 1],
        duration: 1500,
        easing: "easeOutExpo",
      })
  }
}

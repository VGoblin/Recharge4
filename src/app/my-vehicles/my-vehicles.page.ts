import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-vehicles',
  templateUrl: './my-vehicles.page.html',
  styleUrls: ['./my-vehicles.page.scss'],
})
export class MyVehiclesPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  add_vehicles() {
    this.route.navigate(['./add-vehicles']);
  }
}

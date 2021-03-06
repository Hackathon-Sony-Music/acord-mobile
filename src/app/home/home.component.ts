import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  isCantor: false;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  onSelectChange() {
    this.navCtrl.navigateForward('/form');
  }

}

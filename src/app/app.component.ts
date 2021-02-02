import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  killed = false;
  fired = false;
  pro = false;
  killed2 = false;
  fired2 = false;
  pro2 = false;
  killedPasta = false;
  firedPasta = false;
  proPasta = false;
  width = 0;

  constructor() {
  }

  ngOnInit(): void {
  }


  fire() {
    this.pro = true;
    this.fired = true;
    setTimeout(() => {
      this.fired = false;
      $('#pro').animate({left: '850px'});
    }, 250);
    setTimeout(() => {
      this.pro = false;
      this.killed = true;
    }, 700);
  }

  reset() {
    this.killed = false;
    this.fired = false;
    this.width = 0;
    this.pro = false;
  }
  fire2() {
    this.pro2 = true;
    this.fired2 = true;
    setTimeout(() => {
      this.fired2 = false;
      $('#pro2').animate({left: '850px'});
    }, 250);
    setTimeout(() => {
      this.pro2 = false;
      this.killed2 = true;
    }, 700);
  }

  reset2() {
    this.killed2 = false;
    this.fired2 = false;
    this.width = 0;
    this.pro2 = false;
  }
  firePasta() {
    this.proPasta = true;
    this.firedPasta = true;
    setTimeout(() => {
      this.firedPasta = false;
      $('#proPasta').animate({left: '800px'}, {duration:1500});
    }, 250);
    setTimeout(() => {
      this.proPasta = false;
      this.killedPasta = true;
    }, 1500);
  }

  resetPasta() {
    this.killedPasta = false;
    this.firedPasta = false;
    this.width = 0;
    this.proPasta = false;
  }
}

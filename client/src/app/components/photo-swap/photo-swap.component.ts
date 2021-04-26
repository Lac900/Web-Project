import { Component, OnInit } from '@angular/core';
import { IMAGE_NAME_LIST } from '../Component.constant';
import { interval, Subscription } from 'rxjs';



@Component({
  selector: 'app-photo-swap',
  templateUrl: './photo-swap.component.html',
  styleUrls: ['./photo-swap.component.scss']
})
export class PhotoSwapComponent implements OnInit {

  path = '../../../assets/';
  imageDisplay = 0;
  src = '';
  subscription: Subscription;
  intervalId: number;
  timer = 3000

  constructor() { }

  ngOnInit(): void {
    this.src = this.path + IMAGE_NAME_LIST[this.imageDisplay];
    const source = interval(this.timer);
    this.subscription = source.subscribe(val => this.onClick());
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  onClick(): void {
    var newIndex = this.imageDisplay;
    while (newIndex === this.imageDisplay)
    {
      newIndex = Math.floor(Math.random() * IMAGE_NAME_LIST.length);
    }
    this.imageDisplay = newIndex;
    this.src = this.path + IMAGE_NAME_LIST[this.imageDisplay];
    this.subscription.unsubscribe();
    const source = interval(this.timer);
    this.subscription = source.subscribe(val => this.onClick());
  }
}

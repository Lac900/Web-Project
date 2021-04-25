import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-swap',
  templateUrl: './photo-swap.component.html',
  styleUrls: ['./photo-swap.component.scss']
})
export class PhotoSwapComponent implements OnInit {

  path = '../../../assets/';
  imageDisplay = 'img1.jpg';
  src = this.path + this.imageDisplay;

  constructor() { }

  ngOnInit(): void {
  }

  onclick(): void {
    console.log(this.imageDisplay);
    this.imageDisplay = 'img2.jpg';
    console.log(this.imageDisplay);
  }
}

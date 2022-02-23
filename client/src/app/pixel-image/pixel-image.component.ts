import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pixel-image',
  templateUrl: './pixel-image.component.html',
  styleUrls: ['./pixel-image.component.scss']
})
export class PixelImageComponent implements AfterViewInit {
  @ViewChild('image') img: HTMLImageElement;

  constructor() { }

  ngAfterViewInit(): void {
    console.log('ada');
    const myCanvas = document.getElementById('originalCanvas') as HTMLCanvasElement;
    const ctx = myCanvas.getContext('2d');
    const imgTmp = new Image();
    imgTmp.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Spyro.png/220px-Spyro.png';
    imgTmp.onload = () => {
      ctx.drawImage(imgTmp, 0, 0, 200, 200); // Or at whatever offset you like
      console.log(imgTmp);
    };
  }

}

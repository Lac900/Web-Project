import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pixel } from '../pixel';
import { ImageCustom } from '../image';

@Component({
  selector: 'app-pixel-image',
  templateUrl: './pixel-image.component.html',
  styleUrls: ['./pixel-image.component.scss']
})
export class PixelImageComponent implements AfterViewInit {
  @ViewChild('image') img: HTMLImageElement;

  myCanvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor() { }

  ngAfterViewInit(): void {
    this.myCanvas = document.getElementById('originalCanvas') as HTMLCanvasElement;
    const imgTmp = new Image();
    imgTmp.onload = () => {
      this.myCanvas.width = imgTmp.width;
      this.myCanvas.height = imgTmp.height;
      this.ctx = this.myCanvas.getContext('2d');
      this.ctx.drawImage(imgTmp, 0, 0);
    };
    imgTmp.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Spyro.png/220px-Spyro.png';
    imgTmp.crossOrigin = 'Anonymous';

  }

  convert(): void {
    const img = this.getPixelColor(this.ctx.getImageData(0, 0, this.myCanvas.width, this.myCanvas.height));
    img.Invert();
    this.draw(img);
  }

  getPixelColor(img: ImageData): ImageCustom {
    const pixelImage: ImageCustom = new ImageCustom(img.height, img.width);
    let index = 0;
    for (let i = 0; i < img.data.length; i += 4) {
      const p = new Pixel(img.data[i], img.data[i + 1], img.data[i + 2], img.data[i + 3]);
      pixelImage.Add(p, index++);
    }
    return pixelImage;
  }

  draw(img: ImageCustom) {
    const imageData: ImageData = new ImageData(img.width, img.height);
    let index = 0;
    for (const pixel of img.data) {
      imageData.data[index++] = pixel.r;
      imageData.data[index++] = pixel.g;
      imageData.data[index++] = pixel.b;
      imageData.data[index++] = pixel.a;
    }
    this.ctx.putImageData(imageData, 0, 0);
  }

}

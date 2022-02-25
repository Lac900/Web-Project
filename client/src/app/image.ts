import { Pixel } from './pixel';

export class ImageCustom {

  data: Pixel[];
  height: number;
  width: number;


  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
    this.data = [];
  }

  Add(pixel: Pixel, position: number) {
    this.data[position] = pixel;
  }

  Invert() {
    this.data.forEach( (pixel) => {
      pixel.Invert();
    });
  }

}

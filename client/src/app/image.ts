import { Pixel } from './pixel';

export class ImageCustom {

  data: Pixel[];
  height: number;
  width: number;


  constructor(height: number, width: number, data?: Pixel[]) {
    this.height = height;
    this.width = width;
    data !== undefined ? this.data = data : this.data = [];
  }

  Add(pixel: Pixel, position: number) {
    this.data[position] = pixel;
  }

  Invert() {
    this.data.forEach( (pixel) => {
      pixel.Invert();
    });
  }

  GetMean(alpha: boolean): Pixel {
    const meanPixel = new Pixel(0, 0, 0, 255);
    for (const pixel of this.data) {
      meanPixel.r += pixel.r;
      meanPixel.g += pixel.g;
      meanPixel.b += pixel.b;
      if ( alpha ) { meanPixel.a += pixel.a; }
    }
    meanPixel.r /= this.data.length;
    meanPixel.g /= this.data.length;
    meanPixel.b /= this.data.length;
    if ( alpha ) { meanPixel.a /= this.data.length; }
    return meanPixel;
  }

}

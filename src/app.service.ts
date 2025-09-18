import { Injectable, NotFoundException } from '@nestjs/common';
import wintechData from './wintechData.json';

@Injectable()
export class AppService {
  private wintechData: any = wintechData;

  constructor() {
    this.wintechData = wintechData;
  }

  getHello(): string {
    return 'Hello World!';
  }

  async getImageList() {
    return this.wintechData.images;
  }

  async getImageDetail(id: number) {
    const image = this.wintechData.images.find((img: any) => img.id === id);
    if (!image) {
      throw new NotFoundException(`Image with id ${id} not found`);
    }
    return image;
  }
}

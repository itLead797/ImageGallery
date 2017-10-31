import { Injectable } from '@angular/core';
import { ImageRs } from '../model/image-rs';
import { IMAGES } from './file.service.data';

@Injectable()
export class FileService {
 images: ImageRs[];
  constructor() { }

  public getFiles(): ImageRs[] {
    this.images = IMAGES;
      return this.images;
  }
}


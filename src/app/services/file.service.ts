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

  // beginning attempt to read files from a directory
  public getFileList() {
    let fileList = [];
    const fse = require('fs-extra');

    let files = fse.readdirSync('../../../img/');
    console.log(files);
  }
}


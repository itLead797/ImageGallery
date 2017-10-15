import { Injectable } from '@angular/core';
import { ImageRs } from '../model/image-rs';
import { IMAGES } from './file.service.data';

@Injectable()
export class FileService {
 find = require('find');
 images: ImageRs[];
  constructor() { }

  public getFiles(): any {
    this.images = IMAGES;

  //  const folder = '../../../img';
  //  const fs = require('fs');

  //  fs.readdir(folder, (err, files) => {
  //   files.forEach(file => {
  //     console.log(file);
  //   });
  //  });


      return this.images;
  }
}


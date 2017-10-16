import { Injectable } from '@angular/core';
import { ImageRs } from '../model/image-rs';
import { IMAGES } from './file.service.data';

@Injectable()
export class FileService {
 images: ImageRs[];
  constructor() { }

  public getFiles(): any {
    this.images = IMAGES;
    let find = require('find');

    find.file('../assets/img/', function(files) {
      console.log(files.length);
    });


    // const folder = '../../img';
    // const fs = require('fs');

    // fs.readdir(folder, (err, files) => {
    //   files.forEach(file => {
    //     console.log(file);
    //   });
    // });


      return this.images;
  }
}


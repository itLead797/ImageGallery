import { Injectable } from '@angular/core';
import { ImageRs } from './model/image-rs';

@Injectable()
export class FileService {
 // find = require('find');
 files: ImageRs;

  constructor() { }

  public getFiles() {
    let find = require('find');

    find.file('../assets/img', function(files) {
      this.files.img = files;
      console.log(files.length);
     });
     return this.files;
  }
}


import { Injectable } from '@angular/core';
import { ImageRs } from '../model/image-rs';
import { IMAGES } from './file.service.data';

@Injectable()
export class FileService {
 images: ImageRs[];
  __dirname = '../../../img';
  constructor() { }

  public getFiles(): ImageRs[] {
    this.images = IMAGES;
   // this.getFileList();
      return this.images;
  }

  // beginning attempt to read files from a directory
  public getFileList() {
    let fileList = [];
    const fse = require('fs-extra');

    let fs = require('fs');
    fs.realPath(__dirname, function(err, path) {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Path is: ' + path);
    });
    fs.readdir(__dirname, function(err, files) {
      if (err) { return; }
      files.forEach(function(f) {
        console.log('Files: ' + f);
      });
    });

    // let files = fse.readdirSync('../../../img/');
    // console.log(files);
  }
}


import { Injectable } from '@angular/core';

@Injectable()
export class FileService {
 find = require('find');
  files: any;

  constructor() {
    this.find.file('../assets/img', function(files) {
      this.files = files;
      console.log(files.length);
     });
     return this.files;
  }

}


import { Component, Input, OnInit } from '@angular/core';
import { ImageRs } from '../model/image-rs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
@Input() datasource;
selectedImage: ImageRs;

  constructor() { }

  setSelectedImage(image: ImageRs) {
    this.selectedImage = image;
  }
  navigate(forward: boolean) {
    let index: number;
    index = this.datasource.indexOf(this.selectedImage) + (forward ? 1 : -1);
    if (index >= 0 && index < this.datasource.length) {
       this.selectedImage = this.datasource[index];
    }
 }

  ngOnInit() {
  }

}

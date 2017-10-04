import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
@Input() datasource;
selectedImage;
index;
  constructor() { }

  setSelectedImage(image) {
    this.selectedImage = image;
  }
  navigate(forward) {
    this.index = this.datasource.indexOf(this.selectedImage) + (forward ? 1 : -1);
    if (this.index >= 0 && this.index < this.datasource.length) {
       this.selectedImage = this.datasource[this.index];
    }
 }

  ngOnInit() {
  }

}

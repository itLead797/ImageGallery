import { Component, OnInit, Input } from '@angular/core';
import { FileService } from './services/file.service';
import { ImageRs } from './model/image-rs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/* hotkey references
https://stackoverflow.com/questions/37965647/hostbinding-and-hostlistener-what-do-they-do-and-what-are-they-for

*/

export class AppComponent  implements OnInit {
  title = 'Picture Viewer';
  images: ImageRs[] = [];
  baseUrl = '../assets/img/';

  ngOnInit(): any {
    this.images = this.fileService.getFiles();
    return this.images;
    }

  constructor(private fileService: FileService) {
  }
}

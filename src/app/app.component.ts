import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/* hotkey references
https://stackoverflow.com/questions/37965647/hostbinding-and-hostlistener-what-do-they-do-and-what-are-they-for

*/

export class AppComponent {
  title = 'Picture Viewer';
  images;
  baseUrl = '../assets/img/';
  constructor() {
    this.images = [
      {
        'url': this.baseUrl + 'IMG_1411.JPG',
        'title': 'Fall Leaf',
        'caption': 'Leaf in the fall'
      },
      {
        'url': this.baseUrl + 'img_1467.jpg',
        'title': 'Birds',
        'caption': 'Fall birds in a tree'
      },
      {
        'url': this.baseUrl + 'IMG_1475.JPG',
        'title': 'Walking',
        'caption': 'Family walk in the park'
      },
      {
        'url': this.baseUrl + 'IMG_1479.JPG',
        'title': 'Water',
        'caption': 'Cool fall stream'
      },
      {
        'url': this.baseUrl + 'IMG_3115.a.JPG',
        'title': 'Fall Bird',
        'caption': 'Colorful fall bird'
      },
      {
        'url': this.baseUrl + 'IMG_3163.JPG',
        'title': 'Path',
        'caption': 'Path in the fall'
      },
      {
        'url': this.baseUrl + 'IMG_3235.1.jpg',
        'title': 'Fence',
        'caption': 'Webs in the wind'
      },
      {
        'url': this.baseUrl + 'IMG_3247.1.jpg',
        'title': 'Pumpkin',
        'caption': 'Porch pumpkin'
      },
      {
        'url': this.baseUrl + 'IMG_3248.1.jpg',
        'title': 'Sunset',
        'caption': 'Sunset over the roof tops'
      },
      {
        'url': this.baseUrl + 'IMG_3253.1.jpg',
        'title': 'Backyard',
        'caption': 'Fall colors in the backyard'
      },
      {
        'url': this.baseUrl + 'IMG_3265.1.jpg',
        'title': 'Moon',
        'caption': 'Cool moonlight'
      },
      {
        'url': this.baseUrl + 'img_1424.jpg',
        'title': 'Barn',
        'caption': 'Abandoned barn'
      },
      {
        'url': this.baseUrl + 'IMG_2644.JPG',
        'title': 'Fancy Celling',
        'caption': 'Stairwell at old Coca-Cola plant'
      },
      {
        'url': this.baseUrl + 'IMG_0284.JPG',
        'title': 'Balloons',
        'caption': 'Avon hot air balloon festival'
      },
      {
        'url': this.baseUrl + 'IMG_3246.1.jpg',
        'title': 'Girl in Chair',
        'caption': 'Spectator at horse jumping'
      },
      {
        'url': this.baseUrl + 'IMG_1074.1.jpg',
        'title': 'Gun tricks',
        'caption': 'Wild west festival'
      }
    ];
  }
}

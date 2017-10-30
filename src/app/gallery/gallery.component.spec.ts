import { by } from 'protractor/built';
import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { FormsModule, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { GalleryComponent } from './gallery.component';
import { AppComponent } from '../app.component';
import { FileService } from '../services/file.service';
import { ImageRs } from '../model/image-rs';


class fileServiceMock {
  images: ImageRs[];
  constructor() {
    this.images = [
      {
        'url': './assets/img/IMG_1411.JPG',
        'title': 'Fall Leaf',
        'caption': 'Leaf in the fall'
      },
      {
        'url': './assets/img/img_1467.jpg',
        'title': 'Birds',
        'caption': 'Fall birds in a tree'
      },
      {
        'url': './assets/img/IMG_1475.JPG',
        'title': 'Walking',
        'caption': 'Family walk in the park'
      }
    ];
  }
}


describe('GalleryComponent:', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let thumbImage;
  let instance;

  const image = [
    {
      'url': './assets/img/IMG_1411.JPG',
      'title': 'Fall Leaf',
      'caption': 'Leaf in the fall'
    },
    {
      'url': './assets/img/img_1467.jpg',
      'title': 'Birds',
      'caption': 'Fall birds in a tree'
    },
    {
      'url': './assets/img/IMG_1475.JPG',
      'title': 'Walking',
      'caption': 'Family walk in the park'
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryComponent, AppComponent],
      imports: [FormsModule],
      providers: [
        {provide: FileService, useClass: fileServiceMock}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      instance = fixture.debugElement.nativeElement;
    });
    fixture.detectChanges();
    component.ngOnInit();
    fixture.detectChanges();

  });

  it('should create GalleryComponent', () => {
    expect(component).toBeDefined();
    expect(component).toBeTruthy();
  });

  it('should not display modal image until selected', () => {
    expect(component.selectedImage).toBeUndefined();
  });

  it('should display image gallery thumbnails', () => {
    expect(fixture.debugElement.query(By.css('#thumbnailsList')).childNodes.length).toBe(3);
    // TODO: verify first image
  });

  it('should set selected image', () => {
    component.setSelectedImage(image[0]);
    expect(component.selectedImage.url).toContain(image[0].url);
    expect(component.selectedImage.title).toContain(image[0].title);
    expect(component.selectedImage.caption).toContain(image[0].caption);
  });

  it('should display selected image, title and caption in UI', () => {
    let currentImage = image[0];
    let currentUrl = image[0].url.substr(image[0].url.length - 12);

    component.setSelectedImage(currentImage);
    fixture.detectChanges();
    let title = fixture.debugElement.query(By.css('#selectedTitle')).nativeElement.innerText;
    expect(fixture.debugElement.query(By.css('#selectedTitle')).nativeElement.innerText).toBe(currentImage.title);
    expect(fixture.debugElement.query(By.css('#selectedCaption')).nativeElement.innerText).toBe(currentImage.caption);
    expect(fixture.debugElement.query(By.css('#selectedImage')).nativeElement.src).toContain(currentUrl);
  });

  fit('should navigate to next image', () => {
    component.ngOnInit();
    fixture.detectChanges();
    component.setSelectedImage(image[0]);
    fixture.detectChanges();
    // component.navigate(true);
    // fixture.detectChanges();
    // let data = fixture.debugElement.query(By.css('#selectedTitle'));
    // console.log('Inside Test');
    // console.log(data);
    // expect(data.title).toContain(image[1].title);
    // console.log(component.selectedImage.title);
  });

  xit('should navigate to previous image', () => {
    console.log(component.datasource);
    component.setSelectedImage(image[1]);
    component.navigate(true);
    console.log(component.selectedImage.title);
  });

});

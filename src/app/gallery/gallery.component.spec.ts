import { by } from 'protractor/built';
import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { FormsModule, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { GalleryComponent } from './gallery.component';
import { AppComponent } from '../app.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let thumbImage;
  let instance;

  const image =  [
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
      declarations: [ GalleryComponent, AppComponent ],
      imports: [FormsModule],
      providers: [] // AppComponent
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
   // fixture.detectChanges();
    fixture.whenStable().then( () => {
      fixture.detectChanges();
      instance = fixture.debugElement.nativeElement;
    });
  });

  it('should create GalleryComponent', () => {
    expect(component).toBeTruthy();
  });

  xit('should not display modal image until selected', () => {
    // test here
  });

  it('should set selected image', () => {
    component.setSelectedImage(image[0]);
    expect(component.selectedImage.url).toContain(image[0].url);
    expect(component.selectedImage.title).toContain(image[0].title);
    expect(component.selectedImage.caption).toContain(image[0].caption);
  });

  xit('should be able to navigate to next image', () => {
    component.setSelectedImage(image[0]);
    component.navigate(true);
    expect(component.selectedImage.title).toContain(image[1].title);
    // console.log(component.selectedImage.title);
  });

 xit('should be able to navigate to previous image', () => {
    component.setSelectedImage(image[1]);
    component.navigate(true);
    console.log(component.selectedImage.title);
  });

  xit('should display selected image information', async(() => {
    component.setSelectedImage(image[0]);
    fixture.detectChanges();
    let title = fixture.debugElement.query(By.css('#selectedTitle'));
    console.log(title);
    // const value = instance.querySelector('#selectedTitle').textContent;
    // url & caption
    // console.log(value);
   // expect(compiled.querySelector('#selectedTitle').textContent).toContain('Fall Leaf');
  }));

  xit('should display image gallery thumbnails', fakeAsync(() => {
    expect(component).toBeDefined();
    fixture.detectChanges();
    const y = fixture.debugElement.query(By.css('#thumbImage_0'));
    const z = fixture.debugElement.query(By.css('#thumbnailsList'));
    // console.log('Y');
    // console.log(y);
    // console.log('Z');
    // console.log(z);
    // const x = fixture.debugElement.query(By.css(selector)).nativeElement;
    // expect(instance.querySelector('#thumbImage_0').toContain(image));
    // let value = instance.querySelector('#confirmTheFollowingElement').textContent;

  }));


});

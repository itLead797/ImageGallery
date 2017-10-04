import { by } from 'protractor/built';
import { async, fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { GalleryComponent } from './gallery.component';
import { AppComponent } from '../app.component';

fdescribe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let thumbImage;

  const image =  {
    'url': this.baseUrl + 'IMG_1411.JPG',
    'title': 'Fall Leaf',
    'caption': 'Leaf in the fall'
  };
  let instance: GalleryComponent;

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
    fixture.detectChanges();
    fixture.whenStable().then( () => {
      instance = fixture.debugElement.nativeElement;
      thumbImage = fixture.debugElement.query(By.css('#thumbImage_0'));
      console.log(instance);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select an image', () => {
    component.setSelectedImage(image);
    expect(component.selectedImage.url).toContain(image.url);
    expect(component.selectedImage.title).toContain(image.title);
    expect(component.selectedImage.caption).toContain(image.caption);
  });

  fit('should display selected image title', async(() => {
    component.setSelectedImage(image);
    fixture.detectChanges();
    // const value = instance.querySelector('#selectedTitle').textContent;

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

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FileService } from './services/file.service';
import { ImageRs } from './model/image-rs';

class fileServiceMock {
  getFiles() {
    let returnValue: ImageRs[] = [
      {
      'url': 'assets/img/IMG_1411.JPG',
      'title': 'Fall Leaf',
      'caption': 'Leaf in the fall'
    }
  ];

    return returnValue;
  }

}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: FileService, useClass: fileServiceMock}
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);

  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have a title', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Picture Viewer');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Picture Viewer');
    });
  }));
});

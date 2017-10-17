import { TestBed, inject } from '@angular/core/testing';
import { ImageRs } from '../model/image-rs';
import { FileService } from './file.service';


describe('FileService', () => {
let fileService: FileService;

  beforeEach(() => {
    fileService = new FileService();

    TestBed.configureTestingModule({
      providers: [FileService, ImageRs],
      imports: []
    });
  });

  it('should be created', inject([FileService], (service: FileService) => {
    expect(service).toBeTruthy();
  }));

  xit('should return an image', () => {
    let images: ImageRs[] = this.fileService.getFiles();
    // console.log(images);

    // expect(images[0].url).toBe('./assets/img/IMG_1411.JPG');
    // expect(images[0].title).toBe('Fall Leaf');
    // expect(images[0].caption).toBe('Leaf in the fall');
  });
});

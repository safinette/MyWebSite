import { TestBed, inject } from '@angular/core/testing';

import { PageService } from './page.service';
import { AppModule } from '../app.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('PageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([PageService], (service: PageService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { DrawingService } from './drawing.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('DrawingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrawingService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([DrawingService], (service: DrawingService) => {
    expect(service).toBeTruthy();
  }));
});

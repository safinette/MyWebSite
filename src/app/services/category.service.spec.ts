import { TestBed, inject } from '@angular/core/testing';

import { CategoryService } from './category.service';
import { HttpClientModule } from '@angular/common/http';

describe('CategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([CategoryService], (service: CategoryService) => {
    expect(service).toBeTruthy();
  }));
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingsComponent } from './drawings.component';
import { AppModule } from '../app.module';
import { DrawingService } from '../services/drawing.service';
import { APP_BASE_HREF } from '@angular/common';

describe('DrawingsComponent', () => {
  let component: DrawingsComponent;
  let fixture: ComponentFixture<DrawingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [DrawingService, {provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

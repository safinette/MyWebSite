import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectcategoryComponent } from './selectcategory.component';
import { AppModule } from '../app.module';
import { CategoryService } from '../services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

describe('SelectcategoryComponent', () => {
  let component: SelectcategoryComponent;
  let fixture: ComponentFixture<SelectcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      // providers: [CategoryService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

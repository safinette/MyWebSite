import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectcategoryComponent } from './selectcategory.component';
import { AppModule } from '../app.module';
import { CategoryService } from '../services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('SelectcategoryComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  it('should call the selectcategory method on submit', () => {
    const fixture: ComponentFixture<SelectcategoryComponent> =
                    TestBed.createComponent(SelectcategoryComponent);
    spyOn(fixture.componentInstance, 'selectCategory');

    fixture.detectChanges();
    fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', {});

    expect(fixture.componentInstance.selectCategory).toHaveBeenCalled();
    expect((fixture.componentInstance.selectCategory as jasmine.Spy).calls.count())
      .toEqual(1, 'Looks like you are calling selectcategory several times!');
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabdrawingsComponent } from './tabdrawings.component';

describe('TabdrawingsComponent', () => {
  let component: TabdrawingsComponent;
  let fixture: ComponentFixture<TabdrawingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabdrawingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabdrawingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

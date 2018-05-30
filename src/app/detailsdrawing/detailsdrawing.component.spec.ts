import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsdrawingComponent } from './detailsdrawing.component';
import { AppModule } from '../app.module';

describe('DetailsdrawingComponent', () => {
  let component: DetailsdrawingComponent;
  let fixture: ComponentFixture<DetailsdrawingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsdrawingComponent);
    component = fixture.componentInstance;
  });

  it('should have method to get the image URL', () => {
    const cat = {id: 1, name: 'abstrait'};
    component.drawing = { id: 1, name: 'abstrait',
        description: 'La tapisserie rêvée pour ma chambre de petite fille sage',
        img: 'tapisserie', category: cat };

    // when we call the method for the URL
    const url = component.getDrawingImageUrl();

    // then we should have a nice URL
    expect(url).toBe('assets/images/tapisserie.jpg', 'The URL built with `getDrawingImageUrl` is not correct');
  });
});

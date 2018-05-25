import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingComponent } from './drawing.component';
import { AppModule } from '../app.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('DrawingComponent', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule, RouterTestingModule]
  }));

  it('should have method to get the image URL', () => {
    // {"id":1,"name":"abstrait"},"description":"La tapisserie rêvée pour ma chambre de petite
    // fille sage","id":1,"img":"tapisserie","name":"Tapisserie rosée"}
    const drawingComponent: DrawingComponent = new DrawingComponent();
    const cat = {id: 1, name: 'abstrait'};
    drawingComponent.drawing = { id: 1, name: 'abstrait',
        description: 'La tapisserie rêvée pour ma chambre de petite fille sage',
        img: 'tapisserie', category: cat };

    // when we call the method for the URL
    const url = drawingComponent.getDrawingImageUrl();

    // then we should have a nice URL
    expect(url).toBe('assets/images/tapisserie.jpg', 'The URL built with `getDrawingImageUrl` is not correct');
  });
});

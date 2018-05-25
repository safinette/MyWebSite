import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Drawing } from '../models/drawing';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css']
})
export class DrawingComponent implements OnInit {

  @Input() drawing?: Drawing;
  print: boolean;

  constructor() {
    this.print = true;
  }

  ngOnInit() {
  }

  getDrawingImageUrl() {
    const url = `assets/images/${this.drawing.img.toLowerCase()}.jpg`;
    return url;
  }

  clicked() {
    if (this.print) {
      this.print = false;
    } else {
      this.print = true;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { DrawingService } from '../services/drawing.service';
import { Drawing } from '../models/drawing';

@Component({
  selector: 'app-drawings',
  templateUrl: './drawings.component.html',
  styleUrls: ['./drawings.component.css']
})
export class DrawingsComponent implements OnInit {

  drawings = [];

  constructor(private drawingService: DrawingService) { }

  ngOnInit() {
    this.drawingService.drawings().subscribe(drawings => this.drawings = drawings);
  }

}

import { Component, OnInit } from '@angular/core';
import { DrawingService } from '../services/drawing.service';

@Component({
  selector: 'app-tabdrawings',
  templateUrl: './tabdrawings.component.html',
  styleUrls: ['./tabdrawings.component.css']
})
export class TabdrawingsComponent implements OnInit {
  drawings = [];

  constructor(private drawingService: DrawingService) {
  }

  ngOnInit() {
    this.drawingService.drawings().subscribe(
      drawings => this.drawings = drawings
    );
  }

}

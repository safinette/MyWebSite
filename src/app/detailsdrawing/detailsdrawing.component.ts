import { Component, OnInit, Input } from '@angular/core';
import { Drawing } from '../models/drawing';
import { DrawingService } from '../services/drawing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailsdrawing',
  templateUrl: './detailsdrawing.component.html',
  styleUrls: ['./detailsdrawing.component.css']
})
export class DetailsdrawingComponent implements OnInit {

  drawing: Drawing;

  constructor(private drawingService: DrawingService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('drawingId');
     this.drawingService.onedrawing(id).subscribe(drawing => this.drawing = drawing);
  }

  getDrawingImageUrl() {
    const url = `assets/images/${this.drawing.img.toLowerCase()}.jpg`;
    return url;
  }

}

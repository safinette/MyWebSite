import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Drawing } from '../models/drawing';
import { DrawingService } from '../services/drawing.service';

@Component({
  selector: 'app-selectcategory',
  templateUrl: './selectcategory.component.html',
  styleUrls: ['./selectcategory.component.css']
})
export class SelectcategoryComponent implements OnInit {

  categories = [];
  categoryForm: FormGroup;
  drawings = [];

  constructor(private categoryService: CategoryService,
    private drawingService: DrawingService, fb: FormBuilder) {
      this.categoryForm = fb.group({category: fb.control('fleurs')});
  }

  ngOnInit() {
    this.categoryService.categories().
        subscribe(categories => this.categories = categories);
  }

  selectCategory() {
    this.drawingService.someDrawings(this.categoryForm.value.category).subscribe(
      drawings => this.drawings = drawings);
  }

}

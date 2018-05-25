import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Drawing } from '../models/drawing';

@Component({
  selector: 'app-selectcategory',
  templateUrl: './selectcategory.component.html',
  styleUrls: ['./selectcategory.component.css']
})
export class SelectcategoryComponent implements OnInit {

  categories = [];
  categoryForm: FormGroup;

  constructor(private categoryService: CategoryService/*, fb: FormBuilder*/) {
    /*this.categoryForm = fb.group({
      category: fb.control(''),
    });*/
  }

  ngOnInit() {
    this.categoryService.categories().
        subscribe(categories => this.categories = categories);
  }

  /*selectCategory(category: Category) {
    console.log(`catégorie choisie : ${category}`);
  }*/

  selectCategory() {
    console.log(`appel à getSomeDrawings ${this.categoryForm.value.category.name}`);
  }

}

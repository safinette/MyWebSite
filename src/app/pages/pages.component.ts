import { Component, OnInit } from '@angular/core';
import { Page } from '../models/page';
import { PageService } from '../services/page.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  pages: Page[];
  // TODO préciser le type
  count: any;

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageService.pages().subscribe(pages => this.pages = pages);
    this.count = 1;
  }

  next() {
    console.log('appel à next');
    if (this.count < this.pages.length) {
      this.count = this.count + 1;
    }
    console.log(this.count);
  }

  previous() {
    console.log('appel à previous');
    if (this.count > 1) {
      this.count = this.count - 1;
    }
    console.log(this.count);
  }

}

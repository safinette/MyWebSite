import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Page } from '../models/page';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, OnChanges {

  page: Page;
  @Input() id: any;

  constructor(private pageService: PageService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    console.log(`id: ${changes.id}`);
    if (!changes.id.isFirstChange()) {
      this.load();
    }
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.pageService.page(this.id).subscribe(page => this.page = page);
  }

}

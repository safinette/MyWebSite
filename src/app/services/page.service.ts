import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drawing } from '../models/drawing';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) {
  }

  pages(): Observable<Page[]> {
    return this.http.get<Array<Page>>('http://localhost:8080/lesdessinsdesafinette2/pages');
  }

  page(id: Number): Observable<Page> {
    return this.http.get<Page>(`http://localhost:8080/lesdessinsdesafinette2/page/${id}`);
  }
}

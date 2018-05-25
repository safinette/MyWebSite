import { Injectable } from '@angular/core';
import { Drawing } from '../models/drawing';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrawingService {

  constructor(private http: HttpClient) {

  }

  drawings(): Observable<Drawing[]> {
    return this.http.get<Array<Drawing>>(
      'http://localhost:8080/lesdessinsdesafinette2/drawings');
  }

  someDrawings(category: String): Observable<Drawing[]> {
    // http://localhost:8080/lesdessinsdesafinette2/somedrawings?category=fleurs
    return this.http.get<Array<Drawing>>(
      `http://localhost:8080/lesdessinsdesafinette2/somedrawings?category=${category}`);
  }
}

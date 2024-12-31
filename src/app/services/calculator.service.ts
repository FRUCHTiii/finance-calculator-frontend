import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private apiUrl = 'http://localhost:3000/calculate'; // NestJS backend URL

  constructor(private http: HttpClient) {}

  calculate(input1: number, input2: number): Observable<{ result: number }> {
    return this.http.post<{ result: number }>(this.apiUrl, { input1, input2 });
  }
}

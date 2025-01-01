import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class AppComponent {
  input1: number | null = null;
  input2: number | null = null;
  result: number | null = null;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  calculate() {
    if (this.input1 === null || this.input2 === null) {
      this.error = 'Please provide valid inputs.';
      return;
    }

    const payload = { input1: this.input1, input2: this.input2 };

    this.http.post<{ result: number }>('http://162.55.221.212:3000/calculate', payload)
      .subscribe({
        next: (response) => {
          this.result = response.result;
          this.error = null;
        },
        error: (err) => {
          this.error = 'An error occurred while calculating the result.';
          console.error(err);
        },
      });
  }
}

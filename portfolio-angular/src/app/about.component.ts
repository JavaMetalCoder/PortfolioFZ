import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  codingDays = 0;

  ngOnInit() {
    this.calculateCodingDays();
  }

  private calculateCodingDays() {
    const codingStartDate = new Date(2025, 11, 1); // December is 11 (0-indexed)
    const today = new Date();
    const diff = today.getTime() - codingStartDate.getTime();
    this.codingDays = Math.floor(diff / (1000 * 3600 * 24));
  }
}

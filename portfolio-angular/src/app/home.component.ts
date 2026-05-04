import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  skills = [
    {
      category: 'In uso nei progetti',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular']
    },
    {
      category: 'In apprendimento',
      items: ['Java', 'Spring Boot', 'MySQL']
    },
    {
      category: 'Strumenti',
      items: ['Git', 'GitHub', 'Vercel', 'VS Code']
    }
  ];
}

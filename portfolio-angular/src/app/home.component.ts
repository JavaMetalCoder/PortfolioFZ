import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  phrases = [
    'Coding è vita.',
    'HTML, CSS, JavaScript',
    'Java & JavaScript developer',
    'Angular & TypeScript',
    'MetalCoder in azione!'
  ];
  currentPhrase = '';
  private phraseIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId: any;

  skills = [
    { name: 'HTML/CSS/JS', level: 85 },
    { name: 'Java', level: 75 },
    { name: 'Angular', level: 40 },
    { name: 'Spring Boot', level: 30 },
    { name: 'MySQL', level: 60 }
  ];

  ngOnInit() {
    this.startTypingEffect();
  }

  ngOnDestroy() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  private startTypingEffect() {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const type = () => {
      const current = this.phrases[this.phraseIndex];

      if (this.isDeleting) {
        this.currentPhrase = current.substring(0, this.charIndex - 1);
        this.charIndex--;
      } else {
        this.currentPhrase = current.substring(0, this.charIndex + 1);
        this.charIndex++;
      }

      let timeout = this.isDeleting ? deleteSpeed : typeSpeed;

      if (!this.isDeleting && this.charIndex === current.length) {
        timeout = pauseTime;
        this.isDeleting = true;
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      }

      this.timeoutId = setTimeout(type, timeout);
    };

    type();
  }
}

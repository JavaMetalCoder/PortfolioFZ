import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  isSubmitting = false;

  onSubmit() {
    this.isSubmitting = true;
    
    // Simulate API call to Formspree
    setTimeout(() => {
      alert('Messaggio inviato con successo!');
      this.formData = { name: '', email: '', message: '' };
      this.isSubmitting = false;
    }, 1500);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  private readonly cvPath = '/assets/documents/CV.pdf';
  private readonly cvFilename = 'CV.pdf';

  downloadCv(event: MouseEvent): void {
    event.preventDefault();

    const downloadLink = document.createElement('a');

    downloadLink.href = this.cvPath;
    downloadLink.download = this.cvFilename;
    downloadLink.click();
  }
}

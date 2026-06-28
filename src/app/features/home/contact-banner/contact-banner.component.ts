import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-contact-banner',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, SectionTitleComponent],
  templateUrl: './contact-banner.component.html',
  styleUrl: './contact-banner.component.scss'
})
export class ContactBannerComponent {
  formSubmitted = signal<boolean>(false);
  formData = {
    name: '',
    email: '',
    phone: '',
    program: 'women',
    message: ''
  };

  onSubmitForm(event: Event) {
    event.preventDefault();
    if (this.formData.name && this.formData.email && this.formData.phone) {
      // Simulate form submission
      this.formSubmitted.set(true);
    }
  }

  resetForm() {
    this.formSubmitted.set(false);
    this.formData = {
      name: '',
      email: '',
      phone: '',
      program: 'women',
      message: ''
    };
  }
}

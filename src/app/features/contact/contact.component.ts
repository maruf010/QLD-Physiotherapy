import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactPageLightComponent implements OnInit {
  formSubmitted = signal<boolean>(false);
  isSubmitting = signal<boolean>(false);
  submitError = signal<string>('');

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
      this.isSubmitting.set(true);
      this.submitError.set('');

      fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.formData)
      })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to send booking request. Please try again.');
        }
        return res.json();
      })
      .then(data => {
        if (data.success) {
          this.formSubmitted.set(true);
        } else {
          throw new Error(data.error || 'Failed to send booking request.');
        }
      })
      .catch(err => {
        console.error('Email submission error:', err);
        this.submitError.set(err.message || 'An unexpected error occurred. Please try again.');
      })
      .finally(() => {
        this.isSubmitting.set(false);
      });
    }
  }

  resetForm() {
    this.formSubmitted.set(false);
    this.isSubmitting.set(false);
    this.submitError.set('');
    this.formData = {
      name: '',
      email: '',
      phone: '',
      program: 'women',
      message: ''
    };
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }
}

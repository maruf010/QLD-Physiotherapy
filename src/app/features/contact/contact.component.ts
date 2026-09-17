import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, SectionTitleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactPageLightComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

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

  onSubmitForm(form: any, event: Event) {
    event.preventDefault();
    if (form.valid) {
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
      this.route.fragment.subscribe(fragment => {
        if (fragment) {
          setTimeout(() => {
            this.scrollToElement(fragment);
          }, 150);
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      });

      this.route.queryParams.subscribe(params => {
        if (params['program']) {
          this.formData.program = params['program'];
        }
      });
    }
  }

  private scrollToElement(elementId: string) {
    const el = document.getElementById(elementId);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}

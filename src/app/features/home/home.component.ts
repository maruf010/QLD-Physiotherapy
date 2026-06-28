import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { ExercisePhysiologyComponent } from './exercise-physiology/exercise-physiology.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { WhyChooseComponent } from './why-choose/why-choose.component';
import { MeetMelissaComponent } from './meet-melissa/meet-melissa.component';
import { ServiceAreaComponent } from './service-area/service-area.component';
import { FaqComponent } from './faq/faq.component';
import { ContactBannerComponent } from './contact-banner/contact-banner.component';
import { SeoService } from '../../core/services/seo.service';
import { DEFAULT_SEO_CONFIG, HEALTHCARE_JSON_LD_SCHEMA } from '../../core/constants/seo';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ServicesComponent,
    ExercisePhysiologyComponent,
    ConditionsComponent,
    WhyChooseComponent,
    MeetMelissaComponent,
    ServiceAreaComponent,
    FaqComponent,
    ContactBannerComponent
  ],
  template: `
    <main class="home-layout">
      <app-hero (onBook)="scrollToSection('contact')" (onCall)="dialPhone()"></app-hero>
      <app-services (onSelectService)="handleServiceSelection($event)"></app-services>
      <app-exercise-physiology (onBook)="scrollToSection('contact')"></app-exercise-physiology>
      <app-conditions></app-conditions>
      <app-why-choose></app-why-choose>
      <app-meet-melissa></app-meet-melissa>
      <app-service-area></app-service-area>
      <app-faq></app-faq>
      <app-contact-banner></app-contact-banner>
    </main>
  `,
  styles: `
    .home-layout {
      width: 100%;
      overflow-x: hidden;
    }
  `
})
export class HomeComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit() {
    this.seoService.updateMetaTags(DEFAULT_SEO_CONFIG);
    this.seoService.injectSchema(HEALTHCARE_JSON_LD_SCHEMA);
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  dialPhone() {
    window.location.href = 'tel:0410878987';
  }

  handleServiceSelection(serviceName: string) {
    this.scrollToSection('contact');
    
    // Auto-select program dropdown in contact form
    const selectEl = document.getElementById('program') as HTMLSelectElement;
    if (selectEl) {
      if (serviceName.includes("Women")) selectEl.value = 'women';
      else if (serviceName.includes("Bone")) selectEl.value = 'bone';
      else if (serviceName.includes("Ageing") || serviceName.includes("Ageing")) selectEl.value = 'ageing';
      else if (serviceName.includes("Men")) selectEl.value = 'men';
      else if (serviceName.includes("Chronic")) selectEl.value = 'chronic';
      
      // Dispatch change event to let NgModel update
      selectEl.dispatchEvent(new Event('change'));
    }
  }
}

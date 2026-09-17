import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { ExercisePhysiologyComponent } from './exercise-physiology/exercise-physiology.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { WhyChooseComponent } from './why-choose/why-choose.component';
import { MeetMelissaComponent } from './meet-melissa/meet-melissa.component';
import { ServiceAreaComponent } from './service-area/service-area.component';
import { FaqComponent } from './faq/faq.component';
import { ClinicShowcaseComponent } from './clinic-showcase/clinic-showcase.component';
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
    FaqComponent
  ],

  template: `
    <main class="home-layout">
      <app-hero (onBook)="navigateToContactForm()" (onCall)="dialPhone()"></app-hero>
      <app-services (onSelectService)="handleServiceSelection($event)"></app-services>
      <app-exercise-physiology (onBook)="navigateToContactForm()"></app-exercise-physiology>
      <app-conditions></app-conditions>
      <app-why-choose></app-why-choose>
      <!-- <app-clinic-showcase></app-clinic-showcase> -->
      <app-meet-melissa></app-meet-melissa>
      <app-service-area></app-service-area>
      <app-faq></app-faq>
      <!-- <app-contact-banner></app-contact-banner> -->
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
  private readonly router = inject(Router);

  ngOnInit() {
    this.seoService.updateMetaTags(DEFAULT_SEO_CONFIG);
    this.seoService.injectSchema(HEALTHCARE_JSON_LD_SCHEMA);
  }

  navigateToContactForm(program?: string) {
    this.router.navigate(['/contact'], {
      fragment: 'contact-form',
      queryParams: program ? { program } : undefined
    });
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
    let program = 'women';
    if (serviceName.includes("Women")) program = 'women';
    else if (serviceName.includes("Bone")) program = 'bone';
    else if (serviceName.includes("Ageing") || serviceName.includes("Aging")) program = 'ageing';
    else if (serviceName.includes("Men")) program = 'men';
    else if (serviceName.includes("Chronic")) program = 'chronic';
    else if (serviceName.includes("Rehab") || serviceName.includes("General")) program = 'other';

    this.navigateToContactForm(program);
  }
}

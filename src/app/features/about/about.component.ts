import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, ButtonComponent, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  values = [
    {
      title: "Evidence-Based Intervention",
      desc: "Every exercise plan is backed by clinical research and updated pathological guidelines, ensuring your rehab is safe and effective."
    },
    {
      title: "Individual Focus",
      desc: "No templated sheets or generic workouts. We tailor everything to your lifestyle, capability, and specific health pathology."
    },
    {
      title: "Empowering Independence",
      desc: "Our ultimate goal is to give you the strength, confidence, and tools to manage your health and physical activity independently."
    },
    {
      title: "Compassionate Clinical Care",
      desc: "Allied healthcare delivered in a warm, welcoming, and judgment-free space that respects your boundaries and history."
    }
  ];

  timeline = [
    {
      year: "2018",
      title: "Clinical Accreditation",
      desc: "Melissa Murphy graduates and achieves national accreditation as an Accredited Exercise Physiologist (AEP) with ESSA."
    },
    {
      year: "2020",
      title: "Women's Health Specialisation",
      desc: "Completed advanced clinical training targeting menopause physiology, bone-loading protocols, and pelvic floor exercise."
    },
    {
      year: "2022",
      title: "Launching QEP Clinic",
      desc: "Founded QEP in Spring Hill to deliver evidence-based, premium clinical exercise rehabilitation to the Brisbane community."
    },
    {
      year: "2025 - Present",
      title: "Clinical Excellence",
      desc: "Helping hundreds of Brisbane locals achieve metabolic control, osteoporosis management, and healthy active ageing."
    }
  ];

  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'About QEP - Queensland Exercise Physiology',
      description: 'Learn about Melissa Murphy (Accredited Exercise Physiologist) and our mission to provide evidence-based, individualised clinical exercise programs in Spring Hill, Brisbane.',
      keywords: 'about exercise physiologist, melissa murphy, spring hill, brisbane allied health'
    });

    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }
}

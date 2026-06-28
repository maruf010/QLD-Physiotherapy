import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './why-choose.component.html',
  styleUrl: './why-choose.component.scss'
})
export class WhyChooseComponent {
  features = [
    {
      title: "Individualised Exercise Programs",
      desc: "Programs custom designed and continually adjusted to your unique clinical pathology, physical limitations, personal goals, and lifestyle.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"></path><path d="M12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z"></path></svg>`
    },
    {
      title: "Evidence-Based Care",
      desc: "Interventions and prescriptions rooted in peer-reviewed clinical research and health guidelines, ensuring optimal rehabilitation and safety outcomes.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`
    },
    {
      title: "Focus on Strength & Healthy Ageing",
      desc: "Emphasis on bone density, muscular strength, balance retraining, and joint stabilization to protect your body and secure your independence.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h12l-2 9H8L6 3z"></path><path d="M10 12v8a2 2 0 0 0 4 0v-8"></path></svg>`
    },
    {
      title: "Supportive & Welcoming",
      desc: "A warm, inclusive, and clinical environment that values your journey, respects your boundaries, and works alongside you to build long-term wellness.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>`
    },
    {
      title: "Clinical Expertise",
      desc: "Highly experienced in chronic disease management, post-operative orthopedic recovery, metabolic disorders, and complex clinical rehabilitation.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
    }
  ];
}

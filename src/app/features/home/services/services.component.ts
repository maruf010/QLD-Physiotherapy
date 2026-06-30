import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  onSelectService = output<string>();

  services = [
    {
      id: "womens-health-menopause",
      title: "Women's Health & Menopause",
      description: "Tailored exercise programs to help women build strength, support bone health, and maintain confidence through every stage of life.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5c-2.5 0-4.5 2-4.5 4.5v1c0 1-.5 2-1 2.5c0 0 .5.5 1 .5h9c.5 0 1-.5 1-.5c-.5-.5-1-1.5-1-2.5v-1C16.5 7 14.5 5 12 5z" /><path d="M9 11c0 2 1.5 3 3 3s3-1 3-3V10c0-1.5-1-2-3-2s-3 .5-3 2v1z" /><path d="M7 21v-2a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2" /></svg>`
    },
    {
      id: "bone-health-osteoporosis",
      title: "Bone Health",
      description: "Exercise plays a vital role in managing osteopenia and osteoporosis. We help improve strength, balance, and functional capacity to support healthy bones and reduce falls risk.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19.5c.83-.83.83-2.17 0-3l-7-7c-.83-.83-2.17-.83-3 0a2.12 2.12 0 0 0 0 3l7 7c.83.83 2.17.83 3 0z" /><circle cx="18" cy="15" r="2.5" /><circle cx="15" cy="18" r="2.5" /><circle cx="9" cy="6" r="2.5" /><circle cx="6" cy="9" r="2.5" /></svg>`
    },
    {
      id: "healthy-ageing-balance",
      title: "Healthy Ageing",
      description: "We work with older adults to improve strength, balance, mobility, and confidence so you can maintain independence and enjoy life.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="6" r="2" /><path d="M9 8v6M7 11h4M7 20v-5h4v5" /><circle cx="15" cy="6" r="2" /><path d="M15 8v6M13 11h4M13 20v-5h4v5" /><path d="M11 11h2" /></svg>`
    },
    {
      id: "mens-health-wellness",
      title: "Men's Health",
      description: "Our exercise programs support strength, metabolic health, weight management, and healthy ageing for men looking to improve long-term wellbeing.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="4" /><path d="M6 21v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" /></svg>`
    },
    {
      id: "chronic-disease-management",
      title: "Chronic Disease Management",
      description: "Exercise Physiology can assist with a wide range of chronic health conditions and long-term health management.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /><path d="M7 11h3l2-3 2 6 2-3h3" /></svg>`
    }
  ];
}

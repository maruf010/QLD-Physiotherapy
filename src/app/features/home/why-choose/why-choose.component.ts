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
      image: "/assets/images/personalized.png"
    },
    {
      title: "Evidence-Based Care",
      desc: "Interventions and prescriptions rooted in peer-reviewed clinical research and health guidelines, ensuring optimal rehabilitation and safety outcomes.",
      image: "/assets/images/evidence.png"
    },
    {
      title: "Focus on Strength & Healthy Ageing",
      desc: "Emphasis on bone density, muscular strength, balance retraining, and joint stabilization to protect your body and secure your independence.",
      image: "/assets/images/exercise.png"
    },
    {
      title: "Supportive & Welcoming",
      desc: "A warm, inclusive, and clinical environment that values your journey, respects your boundaries, and works alongside you to build long-term wellness.",
      image: "/assets/images/supportive.png"
    },
    {
      title: "Clinical Expertise",
      desc: "Highly experienced in chronic disease management, post-operative orthopedic recovery, metabolic disorders, and complex clinical rehabilitation.",
      image: "/assets/images/verified.png"
    }
  ];
}

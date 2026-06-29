import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  services = [
    {
      id: "womens-health-menopause",
      title: "Women's Health & Menopause",
      description: "Tailored exercise programs to help women build strength, support bone health, and maintain confidence through every stage of life.",
      badge: "POPULAR",
      image: "/assets/images/women.png"
    },
    {
      id: "bone-health-osteoporosis",
      title: "Bone Health & Osteoporosis",
      description: "Exercise plays a vital role in managing osteopenia and osteoporosis. We help improve strength, balance, and functional capacity to support healthy bones and reduce falls risk.",
      badge: "CLINICAL",
      image: "/assets/images/dog.png"
    },
    {
      id: "healthy-ageing-balance",
      title: "Healthy Ageing & Balance",
      description: "We work with older adults to improve strength, balance, mobility, and confidence so you can maintain independence and enjoy life.",
      badge: "LONGEVITY",
      image: "/assets/images/two.png"
    },
    {
      id: "mens-health-wellness",
      title: "Men's Health & Wellness",
      description: "Our exercise programs support strength, metabolic health, weight management, and healthy ageing for men looking to improve long-term wellbeing.",
      badge: "STRENGTH",
      image: "/assets/images/men.png"
    },
    {
      id: "chronic-disease-management",
      title: "Chronic Disease Management",
      description: "Exercise Physiology can assist with a wide range of chronic health conditions and long-term health management.",
      badge: "REHAB",
      image: "/assets/images/heart.png"
    }
  ];

  ngOnInit() {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-conditions',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './conditions.component.html',
  styleUrl: './conditions.component.scss'
})
export class ConditionsComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  conditions = [
    {
      id: "osteoporosis",
      name: "Osteoporosis & Osteopenia",
      image: "/assets/images/bone.png",
      tag: "BONE STRUCTURE"
    },
    {
      id: "menopause",
      name: "Menopause & Women's Health",
      image: "/assets/images/women.png",
      tag: "HORMONAL HEALTH"
    },
    {
      id: "arthritis",
      name: "Arthritis & Joint Management",
      image: "/assets/images/art.png",
      tag: "JOINT HEALTH"
    },
    {
      id: "chronic-pain",
      name: "Chronic Pain Support",
      image: "/assets/images/chronic.png",
      tag: "PAIN MEDICINE"
    },
    {
      id: "diabetes",
      name: "Type 2 Diabetes",
      image: "/assets/images/diabete.png",
      tag: "METABOLIC PATHOLOGY"
    },
    {
      id: "cardiovascular-disease",
      name: "Cardiovascular Disease",
      image: "/assets/images/heart.png",
      tag: "CARDIO FITNESS"
    }
  ];

  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'Chronic Medical Conditions We Support - QEP',
      description: 'Find clinical details on how targeted exercise prescription manages Osteoporosis, Menopause symptoms, Arthritis joint stiffness, Chronic Pain, and Diabetes.',
      keywords: 'chronic disease management, osteoporosis clinical loading, arthritis exercise plan'
    });

    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }
}

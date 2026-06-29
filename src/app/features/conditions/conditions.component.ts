import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-conditions',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './conditions.component.html',
  styleUrl: './conditions.component.scss'
})
export class ConditionsComponent implements OnInit {
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
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }
}

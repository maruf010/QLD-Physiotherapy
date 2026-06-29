import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-conditions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conditions.component.html',
  styleUrl: './conditions.component.scss'
})
export class ConditionsComponent {
  conditions = [
    {
      name: "Type 2 Diabetes",
      image: "/assets/images/diabete.png"
    },
    {
      name: "Cardiovascular Disease",
      image: "/assets/images/heart.png"
    },
    {
      name: "Arthritis",
      image: "/assets/images/art.png"
    },
    {
      name: "Chronic Pain",
      image: "/assets/images/chronic.png"
    },
    {
      name: "Cancer Recovery",
      image: "/assets/images/cancer.png"
    },
    {
      name: "Neurological Conditions",
      image: "/assets/images/neuro.png"
    }
  ];
}

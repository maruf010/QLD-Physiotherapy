import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-conditions',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './conditions.component.html',
  styleUrl: './conditions.component.scss'
})
export class ConditionsComponent {
  conditions = [
    {
      name: "Type 2 Diabetes",
      desc: "Tailored resistance and aerobic protocols designed to enhance insulin sensitivity, assist glucose management, and improve metabolic profiles.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`
    },
    {
      name: "Cardiovascular Disease",
      desc: "Carefully monitored cardiovascular conditioning for hypertension, heart failure, and post-infarct recovery to optimize cardiac output safely.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>`
    },
    {
      name: "Arthritis",
      desc: "Targeted joint loading, muscle strengthening, and range-of-motion routines to relieve osteoarthritis and rheumatoid pain and support mobility.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16.5 9.4 7.55 4.24a1.79 1.79 0 0 0-2.5 1.03l-1.9 6.84a1.79 1.79 0 0 0 .93 2.11l8.94 5.16a1.79 1.79 0 0 0 2.5-1.03l1.9-6.84a1.79 1.79 0 0 0-.93-2.11z"></path></svg>`
    },
    {
      name: "Chronic Pain",
      desc: "Neuromuscular re-education and graded activity exposure to downregulate pain pathways and restore functional confidence and movement comfort.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path></svg>`
    },
    {
      name: "Cancer Recovery",
      desc: "Individually programmed recovery training to combat cancer-related fatigue, rebuild lean muscle mass, and improve quality of life during/after treatment.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`
    },
    {
      name: "Neurological Conditions",
      desc: "Specialized exercise strategies for Parkinson's, MS, and stroke rehab, focusing on neuroplasticity, balance, gait, and coordination retention.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z"></path></svg>`
    }
  ];
}

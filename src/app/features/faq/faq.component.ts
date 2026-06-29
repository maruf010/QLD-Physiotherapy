import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqPageLightComponent implements OnInit {
  openIndex = signal<number | null>(0);

  faqs = [
    {
      q: "What is an Accredited Exercise Physiologist?",
      a: "Accredited Exercise Physiologists (AEPs) are 4-year university-qualified allied health professionals. We specialize in designing and delivering safe, evidence-based exercise interventions for people with chronic medical conditions, acute injuries, or physical disabilities."
    },
    {
      q: "Do I need a doctor's referral to see an Exercise Physiologist?",
      a: "No, you do not need a referral to attend as a private client. You can simply book an appointment directly with us. However, if you want to claim rebates through Medicare (Chronic Disease Management plan), Department of Veterans' Affairs (DVA), or WorkCover, a referral from your GP is required."
    },
    {
      q: "Is Medicare supported at QEP?",
      a: "Yes. If your GP determines you are eligible for a Chronic Disease Management (CDM) plan, you can receive Medicare rebates for up to 5 allied health consultations per calendar year."
    },
    {
      q: "What happens in the first initial assessment session?",
      a: "Your initial 60-minute session involves a thorough review of your medical history, clinical pathology, and lifestyle goals. We then perform physical testing (strength, balance, range of motion) to establish your safe baseline and design your customized exercise framework."
    },
    {
      q: "What should I wear to my consultation?",
      a: "Please wear comfortable, loose-fitting clothing that allows you to move freely, along with supportive closed-toe athletic shoes (sneakers). This will allow us to perform functional movement testing safely."
    }
  ];

  toggleFaq(index: number) {
    this.openIndex.update(current => current === index ? null : index);
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }
}

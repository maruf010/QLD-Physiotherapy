import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  openIndex = signal<number | null>(0);

  faqs = [
    {
      q: "Do I need a doctor's referral to see an Exercise Physiologist?",
      a: "No, you do not need a referral to attend as a private client. You can simply book an appointment directly with us. However, if you are seeking rebates through Medicare (Chronic Disease Management plan), Department of Veterans' Affairs (DVA), or WorkCover, a referral from your General Practitioner (GP) is required."
    },
    {
      q: "What is the difference between an Exercise Physiologist and a Physiotherapist?",
      a: "While both are allied health professionals, Physiotherapists generally focus on acute injury diagnosis, manual therapy, and early-stage rehab. Exercise Physiologists (AEPs) specialize in clinical exercise prescription, strength progression, and lifestyle modification, focusing on chronic conditions, long-term rehabilitation, and functional capacity building."
    },
    {
      q: "Can I claim my sessions on Private Health Insurance?",
      a: "Yes. Most private health funds cover Exercise Physiology (code 502/503). Your level of rebate will depend on your specific health insurance policy and level of extras cover. We recommend checking with your fund to verify your coverage."
    },
    {
      q: "What should I wear to my initial assessment?",
      a: "Please wear comfortable, loose-fitting clothing that allows you to move freely, along with supportive closed-toe athletic shoes (sneakers). This will allow us to perform functional movement testing and minor exercises comfortably."
    },
    {
      q: "How many sessions will I need?",
      a: "This varies significantly depending on your goals and health status. Some clients attend for a few sessions to get a tailored home/gym program and review it periodically, while others prefer regular weekly or bi-weekly supervised clinical sessions for ongoing support and progression."
    }
  ];

  toggleFaq(index: number) {
    this.openIndex.update(current => current === index ? null : index);
  }
}

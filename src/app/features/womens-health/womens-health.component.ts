import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-womens-health',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, ButtonComponent, RouterLink],
  templateUrl: './womens-health.component.html',
  styleUrl: './womens-health.component.scss'
})
export class WomensHealthComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  expandedFaqIndex = signal<number | null>(null);

  servicesList = [
    {
      title: 'Preconception fitness',
      desc: 'Optimise physical readiness, cardiorespiratory health, and core stability in preparation for pregnancy.'
    },
    {
      title: 'Safe exercise during pregnancy',
      desc: 'Evidence-based prenatal programs modified for each trimester to manage gestational symptoms and maintain strength.'
    },
    {
      title: 'Postnatal recovery',
      desc: 'Rebuild core structural integrity and baseline fitness safely after birth, respecting tissue healing timelines.'
    },
    {
      title: 'Returning to exercise after having a baby',
      desc: 'Structured progressions to return to high-impact training, running, or sport without compromising joint or pelvic health.'
    },
    {
      title: 'Core strengthening and abdominal separation (diastasis recti)',
      desc: 'Targeted activation of the deep abdominal wall to manage separation and rebuild functional midline support.'
    },
    {
      title: "Pelvic floor-friendly exercise and guidance",
      desc: 'Safe exercise modifications and loading options designed to protect and support pelvic floor health within an AEP scope of practice.'
    },
    {
      title: 'Strength training for mums',
      desc: 'Progressive load training structured to handle the everyday lifting, carrying, and physical demands of motherhood.'
    },
    {
      title: 'Menopause and perimenopause',
      desc: 'Clinical exercise programs to regulate metabolic rate, support heart health, and manage symptoms during hormonal transitions.'
    },
    {
      title: 'Bone health and osteoporosis prevention',
      desc: 'High-density progressive resistance training and impact loading to stimulate bone density accretion and safeguard joint health.'
    }
  ];

  faqs = [
    {
      q: 'Why should I see an Exercise Physiologist for women\'s health?',
      a: 'As Accredited Exercise Physiologists, we hold clinical degrees and specialize in prescribing exercise for health pathologies, pre- and postnatal changes, and complex hormonal transitions like menopause. We design custom programs that respect your body\'s healing requirements and prevent injury.'
    },
    {
      q: 'When can I start postnatal exercise after giving birth?',
      a: 'Generally, after your 6-week obstetrician or GP clearance, you can begin structured clinical recovery exercise. However, gentle pelvic floor and deep core breathing can start much sooner. We conduct a thorough assessment to determine your ready baseline.'
    },
    {
      q: 'How does exercise support me during menopause?',
      a: 'Declining estrogen levels accelerate the loss of muscle mass and bone mineral density. Progressive strength training acts as a clinical countermeasure, stimulating bone loading and muscle protein synthesis, while structured cardiovascular conditioning manages blood pressure and insulin sensitivity.'
    }
  ];

  ngOnInit() {
    this.seoService.updateMetaTags({
      title: "Women's Health Exercise Physiology Brisbane - QEP",
      description: "Dedicated clinical exercise plans for pregnancy, postpartum recovery, diastasis recti, menopause, and bone health. Personalised care with Melissa Murphy.",
      keywords: "womens health brisbane, pregnancy exercise, postpartum rehabilitation, menopause exercise, pelvic floor friendly, exercise physiology"
    });

    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }

  toggleFaq(index: number) {
    if (this.expandedFaqIndex() === index) {
      this.expandedFaqIndex.set(null);
    } else {
      this.expandedFaqIndex.set(index);
    }
  }
}

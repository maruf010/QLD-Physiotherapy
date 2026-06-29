import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { SeoService } from '../../../core/services/seo.service';

interface ServiceDetail {
  title: string;
  subtitle: string;
  tagline: string;
  overview: string;
  benefits: string[];
  clinicalFocus: string[];
  faq: { q: string; a: string }[];
}

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, ButtonComponent, RouterLink],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss'
})
export class ServiceDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);

  serviceId: string | null = null;
  serviceData: ServiceDetail | null = null;

  private readonly dataMap: Record<string, ServiceDetail> = {
    'womens-health-menopause': {
      title: "Women's Health & Menopause",
      subtitle: "Navigating physiological milestones with strength, guidance, and evidence-based clinical protocols.",
      tagline: "WOMEN'S PHYSIOLOGY",
      overview: "Hormonal changes during peri-menopause and menopause affect muscle mass, bone density, vascular elasticity, and mood. Clinical exercise physiology designs targeted resistance and aerobic loading to offset these biological transitions, maintaining lean muscle tissue, supporting joint health, and protecting pelvic floor integrity.",
      benefits: [
        "Maintains muscle mass and strength during hormonal transitions",
        "Assists in cardiovascular protection and metabolic regulation",
        "Supports sleep quality, mental wellbeing, and fatigue management",
        "Integrates safe pelvic floor stability during load progression"
      ],
      clinicalFocus: [
        "Resistance training optimized for hormonal profiles",
        "Pelvic floor friendly load progressions",
        "Core stability and postural alignment",
        "High-density interval conditioning for metabolic health"
      ],
      faq: [
        {
          q: "Why is resistance training essential during menopause?",
          a: "During menopause, declining estrogen levels accelerate the loss of muscle mass and bone mineral density. Progressive resistance training sends mechanical signals to the bones and muscles to rebuild and stay strong, effectively counteracting this decline."
        },
        {
          q: "I have weak pelvic floor muscles. Can I still participate?",
          a: "Absolutely. Our exercise plans specifically modify standard lifts to avoid excessive intra-abdominal pressure. We integrate pelvic floor recruitment into all exercise progressions."
        }
      ]
    },
    'bone-health-osteoporosis': {
      title: "Bone Health & Osteoporosis",
      subtitle: "Scientific progressive bone-loading protocols to increase mineral density and reduce fracture risks.",
      tagline: "OSTEOPOROSIS & OSTEOPENIA",
      overview: "Osteoporosis and osteopenia require specialized, high-intensity mechanical loading (bone loading) to stimulate osteoblast activity. At QEP, we design targeted resistance training, impact loading, and balance progressions to structurally reinforce bone matrix, improve balance, and dramatically reduce the risk of falls and fractures.",
      benefits: [
        "Stimulates bone mineral density accretion at the hip and spine",
        "Improves dynamic balance and reactive stability to prevent falls",
        "Strengthens secondary stabilizers to protect structural joints",
        "Builds confidence in performing everyday lifting safely"
      ],
      clinicalFocus: [
        "Progressive high-intensity resistance training (LIFTMOR framework)",
        "Axial compression loading protocols",
        "Vestibular and balance retraining",
        "Safe spinal movement patterns and lifting mechanics"
      ],
      faq: [
        {
          q: "Isn't heavy lifting dangerous for someone with osteoporosis?",
          a: "When performed with poor form, yes. However, clinical trials (like the LIFTMOR study) prove that supervised, progressive high-intensity resistance loading is safe and highly effective at improving bone density. Melissa guides your form directly to guarantee safety."
        },
        {
          q: "What is the difference between osteopenia and osteoporosis?",
          a: "Osteopenia represents a mild reduction in bone density below normal levels. Osteoporosis is a more advanced condition where bone loss makes the structure porous and vulnerable to fractures. Both benefit significantly from clinical bone loading."
        }
      ]
    },
    'healthy-ageing-balance': {
      title: "Healthy Ageing & Balance",
      subtitle: "Securing your physical independence, joint stability, and functional confidence as you age.",
      tagline: "LONGEVITY & INDEPENDENCE",
      overview: "Healthy ageing is about preserving your capability to move freely, lift groceries, get off the floor, and enjoy active hobbies. QEP works closely with older adults to combat sarcopenia (muscle loss), joint stiffness, and balance issues using safe, clinical exercise pathways that fit your current capacity.",
      benefits: [
        "Maintains independent mobility, gait speed, and motor control",
        "Reduces joint stiffness and protects arthritic knee/hip joints",
        "Improves dynamic and static balance, reducing fall risks",
        "Supports long-term cognitive health and energy levels"
      ],
      clinicalFocus: [
        "Functional pattern training (sit-to-stand, stepping mechanics)",
        "Progressive strength training for major muscle groups",
        "Fall prevention and agility exercises",
        "Joint range-of-motion preservation"
      ],
      faq: [
        {
          q: "I haven't exercised in years. Is it too late to start?",
          a: "It is never too late. The human body retains the capacity to build strength and improve balance at any age. We begin at a level that matches your baseline and progress slowly."
        },
        {
          q: "How does exercise prevent falls?",
          a: "Falls are often caused by weak lower limb muscles and delayed balance reactions. We train your leg strength, core stability, and fast-twitch muscle fibers to help you catch yourself if you trip."
        }
      ]
    },
    'mens-health-wellness': {
      title: "Men's Health & Wellness",
      subtitle: "Optimising strength, metabolic health, and vascular fitness for long-term longevity.",
      tagline: "STRENGTH & ENDURANCE",
      overview: "Men face unique cardiovascular risks, prostate health concerns, and hormonal changes (gradual testosterone decline) as they age. QEP designs structured exercise programs targeting lean muscle preservation, abdominal fat reduction, blood pressure control, and joint mobility to secure long-term health.",
      benefits: [
        "Improves body composition and reduces visceral abdominal fat",
        "Supports healthy testosterone levels and muscle mass preservation",
        "Protects cardiovascular system and manages resting blood pressure",
        "Reduces systemic inflammation and supports joint mobility"
      ],
      clinicalFocus: [
        "Hypertrophy and strength-focused training",
        "Vascular conditioning and aerobic capacity building",
        "Post-operative prostate cancer support",
        "Postural correction and lower back protection"
      ],
      faq: [
        {
          q: "How does exercise protect my heart?",
          a: "Aerobic and resistance training improve vascular elasticity, help clear blood lipids, lower resting blood pressure, and strengthen your heart muscle. This directly lowers the risk of heart disease."
        },
        {
          q: "Can exercise help manage lower back pain?",
          a: "Yes. Most lower back issues are related to weak glutes, tight hip flexors, and poor core activation. Our programs address these mechanical imbalances to relieve stress on your spine."
        }
      ]
    },
    'chronic-disease-management': {
      title: "Chronic Disease Management",
      subtitle: "Allied health exercise interventions to manage clinical pathologies and improve daily life.",
      tagline: "CLINICAL PATHOLOGY",
      overview: "Accredited Exercise Physiologists are trained to treat chronic diseases with clinical movement. Whether you are managing Type 2 Diabetes, recovering from cancer therapy, or dealing with neurological conditions, we design safe, tailored plans that align with your medical profile to manage symptoms and build physical capacity.",
      benefits: [
        "Enhances insulin sensitivity and assists blood glucose regulation",
        "Reduces fatigue during and after clinical cancer treatments",
        "Supports nervous system adaptation and movement control",
        "Improves daily functional capacity and overall quality of life"
      ],
      clinicalFocus: [
        "Type 2 Diabetes glucose management protocols",
        "Oncology-specific fatigue management and strength recovery",
        "Cardiopulmonary conditioning (safe heart rates)",
        "Neurological gait and coordination retraining"
      ],
      faq: [
        {
          q: "What is an Accredited Exercise Physiologist?",
          a: "AEPs are university-qualified allied health professionals. We hold a 4-year clinical degree and specialize in prescribing exercise for patients with chronic medical conditions, injuries, and disabilities."
        },
        {
          q: "Can I get a Medicare rebate for my chronic condition?",
          a: "Yes. If your GP puts you on a Chronic Disease Management (CDM) plan, you can claim Medicare rebates for up to 5 sessions per calendar year."
        }
      ]
    }
  };

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.serviceId = params.get('id');
      if (this.serviceId && this.dataMap[this.serviceId]) {
        this.serviceData = this.dataMap[this.serviceId];
        
        // Dynamically update SEO meta tags based on the active service
        this.seoService.updateMetaTags({
          title: `${this.serviceData.title} - QEP Brisbane`,
          description: this.serviceData.subtitle,
          keywords: `${this.serviceData.title.toLowerCase()}, allied health brisbane, clinical exercise rehabilitation`
        });
      }
    });

    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { SeoService } from '../../../core/services/seo.service';

interface ConditionDetail {
  title: string;
  tagline: string;
  metaDesc: string;
  intro: string;
  mechanics: string;
  howWeHelp: string[];
  evidence: string;
}

@Component({
  selector: 'app-condition-detail',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './condition-detail.component.html',
  styleUrl: './condition-detail.component.scss'
})
export class ConditionDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);

  conditionId: string | null = null;
  conditionData: ConditionDetail | null = null;

  private readonly dataMap: Record<string, ConditionDetail> = {
    'osteoporosis': {
      title: "Osteoporosis & Osteopenia Management",
      tagline: "BONE MINERAL DENSITY",
      metaDesc: "Clinical bone-loading protocols to build structural skeletal integrity and reduce risk of fractures.",
      intro: "Osteoporosis and its precursor, osteopenia, are characterized by a reduction in bone mineral density (BMD), making bones brittle and vulnerable to fractures. Mechanical loading is the primary non-pharmacological stimulus to encourage bone deposition.",
      mechanics: "Bones adapt to the mechanical loads placed upon them (Wolff's Law). When subjected to structured, progressive compressive and tensile forces, osteoblasts are activated to lay down new bone matrix, strengthening skeletal sites most prone to fracture (hip, spine, and wrist).",
      howWeHelp: [
        "Implementation of progressive high-intensity resistance training (such as the LIFTMOR framework)",
        "Axial compression loading to stimulate bone density",
        "Reactive balance retraining to mitigate fall risks",
        "Education on safe bending, twisting, and lifting mechanics in daily life"
      ],
      evidence: "Clinical research shows that supervised, progressive resistance training significantly improves bone mineral density in postmenopausal women and older men, while simultaneously reducing fall risks."
    },
    'menopause': {
      title: "Menopause & Hormonal Transitions",
      tagline: "WOMEN'S CLINICAL HEALTH",
      metaDesc: "Using exercise physiology to manage metabolic, cardiovascular, and skeletal health during menopause.",
      intro: "The transition through menopause involves major hormonal shifts, particularly the decline of estrogen. This biological change accelerates muscle loss (sarcopenia), decreases bone mineral density, and alters metabolic and cardiovascular profiles.",
      mechanics: "Targeted physical conditioning acts as a systemic counter-measure. Resistance training stimulates muscle protein synthesis and bone loading, while structured cardiovascular conditioning manages blood pressure and insulin sensitivity, helping women maintain control over their health.",
      howWeHelp: [
        "Custom resistance training to offset hormonal muscle and bone loss",
        "Targeted metabolic conditioning to support weight management and insulin sensitivity",
        "Pelvic floor integration to support core stability and structural alignment",
        "Fatigue management and energy regulation protocols"
      ],
      evidence: "Supervised exercise during menopause has been shown to reduce visceral fat accumulation, improve lipid profiles, preserve bone mass, and support sleep and mental wellbeing."
    },
    'arthritis': {
      title: "Arthritis & Joint Management",
      tagline: "OSTEOARTHRITIS & RHEUMATOID",
      metaDesc: "Managing joint pain, reducing stiffness, and strengthening supporting muscles through clinical movement.",
      intro: "Osteoarthritis and inflammatory joint conditions like Rheumatoid Arthritis cause pain, stiffness, and reduced range of motion. Many individuals avoid movement out of fear of worsening pain, which can lead to muscle wasting and joint instability.",
      mechanics: "Synovial joints do not have a direct blood supply; they rely on movement to circulate synovial fluid, which lubricates and delivers nutrients to joint cartilage. Strengthening the muscles surrounding a joint reduces the physical load directly placed on that joint.",
      howWeHelp: [
        "Low-impact resistance training to strengthen joint-supporting muscle groups",
        "Preserving and improving joint range of motion",
        "De-loading techniques and exercise modifications to manage pain flare-ups",
        "Cardiovascular fitness conditioning that minimizes joint impact (e.g., cycling, water-based exercise)"
      ],
      evidence: "Clinical guidelines identify exercise as a first-line treatment for osteoarthritis, proving it to be as effective as pain medications for reducing joint pain and improving physical function."
    },
    'chronic-pain': {
      title: "Chronic Pain Support",
      tagline: "PAIN NEUROSCIENCE & MOVEMENT",
      metaDesc: "Graduated movement plans to retrain the nervous system and regain functional capacity.",
      intro: "Chronic or persistent pain (lasting longer than 3 months) is complex and often involves central sensitization—where the nervous system remains in a hyper-sensitive state, interpreting harmless movements as threat signals.",
      mechanics: "Graduated exercise and physical activity can help retrain the nervous system. By performing controlled movements in a safe, low-stress environment, we can gradually expand your pain-free movement boundaries, reduce fear of movement, and build tissue tolerance.",
      howWeHelp: [
        "Graded activity exposure to safely rebuild movement confidence",
        "Neuromuscular re-education to correct compensatory movement patterns",
        "Aerobic conditioning to trigger natural pain-relieving mechanisms (endorphins)",
        "Pacing strategies to help you avoid the common 'boom-and-bust' cycle of pain"
      ],
      evidence: "Physical activity is supported by strong evidence as an effective intervention for chronic musculoskeletal pain, helping to improve daily function, reduce pain intensity, and enhance quality of life."
    },
    'diabetes': {
      title: "Type 2 Diabetes & Insulin Sensitivity",
      tagline: "METABOLIC PATHOLOGY",
      metaDesc: "Using exercise as a powerful tool to lower blood glucose and improve insulin function.",
      intro: "Type 2 Diabetes is characterized by insulin resistance, where cells fail to respond effectively to insulin, leading to elevated blood glucose levels. Skeletal muscle is the primary site for glucose clearance in the body.",
      mechanics: "Muscle contraction stimulates glucose transport proteins (GLUT4) to move to the cell membrane, allowing glucose to enter the muscle cells without relying on insulin. This direct pathway makes exercise a highly effective tool for immediate and long-term blood glucose regulation.",
      howWeHelp: [
        "Structured resistance training to increase skeletal muscle mass and glucose storage capacity",
        "Aerobic conditioning to enhance mitochondrial function and overall metabolic rate",
        "Individualized tracking of pre- and post-exercise blood glucose levels for safety",
        "Collaborative support to establish consistent exercise habits for long-term health"
      ],
      evidence: "Consistent aerobic and resistance training has been shown to reduce HbA1c levels, improve lipid profiles, manage blood pressure, and lower the risk of cardiovascular complications associated with diabetes."
    },
    'cardiovascular-disease': {
      title: "Cardiovascular Disease & Recovery",
      tagline: "CARDIOPULMONARY FITNESS",
      metaDesc: "Supervised exercise conditioning to support heart health, manage blood pressure, and build stamina.",
      intro: "Managing cardiovascular conditions—such as coronary artery disease, hypertension, or recovery from a cardiac event—requires careful exercise prescription to improve heart efficiency without placing excessive stress on the cardiovascular system.",
      mechanics: "Regular cardiovascular training helps lower resting heart rate, reduces arterial stiffness, improves blood flow, and enhances oxygen delivery to tissues. This reduces the workload on your heart during daily activities.",
      howWeHelp: [
        "Carefully paced aerobic conditioning to improve cardiovascular stamina",
        "Safe resistance training designed to prevent sudden spikes in blood pressure",
        "Monitoring of heart rate, blood pressure, and exertion levels during sessions",
        "Education on identifying safe heart rate zones for independent home exercise"
      ],
      evidence: "Structured cardiovascular exercise is a key component of cardiac rehabilitation, demonstrated to reduce cardiovascular mortality and lower the risk of future cardiac events."
    }
  };

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.conditionId = params.get('id');
      if (this.conditionId && this.dataMap[this.conditionId]) {
        this.conditionData = this.dataMap[this.conditionId];
        
        // Dynamically update SEO meta tags based on the active condition
        this.seoService.updateMetaTags({
          title: `${this.conditionData.title} - QEP Brisbane`,
          description: this.conditionData.metaDesc,
          keywords: `${this.conditionData.title.toLowerCase()}, exercise physiologist, health brisbane`
        });
      }
    });

    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }
}

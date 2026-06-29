import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  updateMetaTags(config: {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
  }) {
    // Basic Meta Tags
    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });
    
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // OpenGraph Meta Tags
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://qldphysiotherapy.vercel.app';
    const imageUrl = config.ogImage ? (config.ogImage.startsWith('http') ? config.ogImage : origin + config.ogImage) : origin + '/assets/images/what is section.png';

    this.meta.updateTag({ property: 'og:title', content: config.ogTitle || config.title });
    this.meta.updateTag({ property: 'og:description', content: config.ogDescription || config.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: config.ogUrl || this.document.URL });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });

    // Twitter Card Meta Tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.ogTitle || config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.ogDescription || config.description });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });

    // Canonical Link
    this.updateCanonicalLink(config.canonical || this.document.URL);
  }

  updateCanonicalLink(url: string) {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  injectSchema(schema: object) {
    let script: HTMLScriptElement | null = this.document.getElementById('ld-json-schema') as HTMLScriptElement;
    if (!script) {
      script = this.document.createElement('script');
      script.id = 'ld-json-schema';
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.text = JSON.stringify(schema);
  }
}

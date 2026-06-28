import { Component, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'qld-physiotherapy';
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollReveal();
    }
  }

  private initScrollReveal(): void {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));
    };

    // Delay slightly to ensure Angular templates are fully rendered
    setTimeout(observeElements, 300);

    // Watch for DOM changes to observe dynamically added components
    const mutationObserver = new MutationObserver(observeElements);
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}

import { Component, signal, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  private readonly scroller = inject(ViewportScroller);

  isScrolled = signal<boolean>(false);
  isMenuOpen = signal<boolean>(false);
  activeSection = signal<string>('home');

  navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'conditions', label: 'Conditions' },
    { id: 'why-choose', label: 'Why Choose' },
    { id: 'meet-melissa', label: 'Melissa' },
    { id: 'contact', label: 'Contact' }
  ];

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
    this.trackActiveSection();
  }

  checkScroll() {
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 50);
    }
  }

  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }

  scrollToSection(id: string) {
    this.isMenuOpen.set(false);
    this.activeSection.set(id);
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  trackActiveSection() {
    if (typeof window === 'undefined') return;

    const scrollPosition = window.scrollY + 120; // active window padding offset

    for (const link of this.navLinks) {
      const element = document.getElementById(link.id);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection.set(link.id);
          break;
        }
      }
    }
  }
}

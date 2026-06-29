import { Component, signal, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  private readonly scroller = inject(ViewportScroller);
  private readonly router = inject(Router);

  isScrolled = signal<boolean>(false);
  isMenuOpen = signal<boolean>(false);
  activeSection = signal<string>('home');
  currentUrl = signal<string>('/');

  navLinks = [
    { route: '/', label: 'Home' },
    { route: '/about', label: 'About' },
    { route: '/services', label: 'Services' },
    { route: '/conditions', label: 'Conditions' },
    { route: '/faq', label: 'FAQ' },
    { route: '/contact', label: 'Contact' }
  ];

  ngOnInit() {
    this.checkScroll();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentUrl.set(event.urlAfterRedirects);
      this.isMenuOpen.set(false);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 50);
    }
  }

  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }
}

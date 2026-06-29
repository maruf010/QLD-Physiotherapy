import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'services',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/services/services.component').then(m => m.ServicesComponent)
      },
      {
        path: ':id',
        loadComponent: () => import('./features/services/service-detail/service-detail.component').then(m => m.ServiceDetailComponent)
      }
    ]
  },
  {
    path: 'conditions',
    children: [
      {
        path: '',
        loadComponent: () => import('./features/conditions/conditions.component').then(m => m.ConditionsComponent)
      },
      {
        path: ':id',
        loadComponent: () => import('./features/conditions/condition-detail/condition-detail.component').then(m => m.ConditionDetailComponent)
      }
    ]
  },
  {
    path: 'faq',
    loadComponent: () => import('./features/faq/faq.component').then(m => m.FaqPageLightComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactPageLightComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];


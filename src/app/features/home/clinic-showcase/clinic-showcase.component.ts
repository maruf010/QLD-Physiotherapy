import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-clinic-showcase',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './clinic-showcase.component.html',
  styleUrl: './clinic-showcase.component.scss'
})
export class ClinicShowcaseComponent {}

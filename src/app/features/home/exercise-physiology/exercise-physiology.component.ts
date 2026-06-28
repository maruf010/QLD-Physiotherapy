import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-exercise-physiology',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './exercise-physiology.component.html',
  styleUrl: './exercise-physiology.component.scss'
})
export class ExercisePhysiologyComponent {
  onBook = output<void>();
}

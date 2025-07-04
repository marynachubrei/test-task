import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {
  GetStrengthIndicatorLevelPipe
} from "../../pipes/get-strength-indicator-level/get-strength-indicator-level.pipe";

@Component({
  selector: 'app-strength-indicator',
  templateUrl: './strength-indicator.component.html',
  styleUrls: ['./strength-indicator.component.scss'],

  standalone: true,
  imports: [CommonModule, GetStrengthIndicatorLevelPipe],
})
export class StrengthIndicatorComponent {

  @Input() label: string = '';
}

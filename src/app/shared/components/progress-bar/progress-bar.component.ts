import { Component, Input } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ProgressBarComponent {
  @Input() value = 48.2;
  @Input() target = 0;
  @Input() isCountVisible = false;
  @Input() label: string = "";
  @Input() marginBottom: number = 0;
  @Input() mode :'blue'|'green'|'yellow'='blue';
  protected readonly Math = Math;
}

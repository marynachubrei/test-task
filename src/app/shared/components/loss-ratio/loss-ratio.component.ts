import {Component, Input} from '@angular/core';
import {
  GetLossRatioBadgeBackgroundPipe
} from "../../pipes/get-loss-ratio-badge-background/get-loss-ratio-badge-background.pipe";
import {CommonModule, NgClass} from "@angular/common";

@Component({
  selector: 'app-loss-ratio',
  templateUrl: './loss-ratio.component.html',
  styleUrls: ['./loss-ratio.component.scss'],
  imports: [
    GetLossRatioBadgeBackgroundPipe,
    CommonModule
  ],
  standalone: true
})
export class LossRatioComponent {
  @Input() ratio: number = 0;

}

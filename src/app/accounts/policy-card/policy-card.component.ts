import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-policy-card',
  templateUrl: './policy-card.component.html',
  styleUrls: ['./policy-card.component.scss']
})
export class PolicyCardComponent {
  @Input() title!: string;
  @Input() premium!: number;
  @Input() effDate!: string | null;
  @Input() iconClass!: string;
  @Input() colorClass!: string;
  @Input() icon!: string;
}

import {Component, Input} from '@angular/core';
import {IconConstants} from "../../icons/icon-constants";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-check-icon',
  templateUrl: './check-icon.component.html',
  styleUrls: ['./check-icon.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
  ]
})
export class CheckIconComponent {
  @Input() isDisabled: boolean = false;
  @Input()type: 'arrowUp' | 'arrowDown' | 'check' | 'number' = 'check';
  @Input() number: number = 0;
  @Input() mode: 'green' | 'yellow' = 'green';
  icons =IconConstants

}

import {Component, Input} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [
    MatButtonModule,
    CommonModule,
    MatIconModule
  ],
  standalone: true
})
export class ButtonComponent {
  @Input() title: string =""
  @Input() isSelected: boolean = false
  @Input() isIcon: boolean = true
  @Input() icon: string = ""
  @Input() isWide: boolean = false
  @Input() mode: 'green' | 'yellow'|'blue' = 'blue';

}

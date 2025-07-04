import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
  standalone: true
})
export class ActionButtonComponent {
  @Input() title: string =""
  @Input() isSelected: boolean = false
  @Input() isIcon: boolean = true
  @Input() icon: string = ""
  @Input() isWide: boolean = false

}

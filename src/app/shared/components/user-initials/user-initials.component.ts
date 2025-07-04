import {Component, Input} from '@angular/core';
import {User} from "../../commons/models";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-user-initials',
  templateUrl: './user-initials.component.html',
  styleUrls: ['./user-initials.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class UserInitialsComponent {
  @Input() size: number = 0;
  @Input() user: User| null = null;
}

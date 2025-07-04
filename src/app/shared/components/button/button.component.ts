import {Component, Input} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [
    MatButtonModule
  ],
  standalone: true
})
export class ButtonComponent {
  @Input() title: string ="ti"

}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  standalone: true
})
export class WrapperComponent {
@Input() title: string='';
@Input() isH100=false;
@Input() isUnderlined = true;
@Input() isSelected = false;
@Input() titleClass: string = '';
}

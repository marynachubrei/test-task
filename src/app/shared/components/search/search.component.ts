import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true
})
export class SearchComponent {
  @Input() isUnderlined: boolean=false;
  @Input() height: number = 40;
}

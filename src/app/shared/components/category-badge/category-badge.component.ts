import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-category-badge',
  templateUrl: './category-badge.component.html',
  styleUrls: ['./category-badge.component.scss'],
  standalone: true,
})
export class CategoryBadgeComponent {
  @Input() value = 0

}

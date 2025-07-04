import {Component, Input} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {GetNestedValuePipe} from "../../pipes/get-nested-value/get-nested-value.pipe";
import {MatIconModule} from "@angular/material/icon";
import {IconConstants} from "../../icons/icon-constants";
import {StatusComponent} from "../status/status.component";
import {LossRatioComponent} from "../loss-ratio/loss-ratio.component";
import {CategoryBadgeComponent} from "../category-badge/category-badge.component";
import {StrengthIndicatorComponent} from "../strength-indicator/strength-indicator.component";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  imports: [
    MatTableModule,
    CommonModule,
    GetNestedValuePipe,
    MatIconModule,
    StatusComponent,
    LossRatioComponent,
    CategoryBadgeComponent,
    StrengthIndicatorComponent,
  ],
  standalone: true
})
export class TableComponent {
  @Input() data: any = []; // TODO: to add model
  @Input() columns: any = []; // TODO: to add model
  icons= IconConstants;
}

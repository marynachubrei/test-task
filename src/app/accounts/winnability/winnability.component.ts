import {Component, Input} from '@angular/core';
import {IconConstants} from "../../shared/icons/icon-constants";

@Component({
  selector: 'app-winnability',
  templateUrl: './winnability.component.html',
  styleUrls: ['./winnability.component.scss']
})
export class WinnabilityComponent {
  @Input() selectedSubOption=""
  icons = IconConstants

}

import { Component } from '@angular/core';
import {AccountsConstants} from "../common/constants";

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent {
  accountDetailsOptions=AccountsConstants.ACCOUNT_DETAILS_OPTIONS;
  selectedOptionId: number = 1;
  selectedSubOption :string = "Winnability";

  selectMenu(selectedOptionId: number): void {
    this.selectedOptionId = selectedOptionId
  }
}

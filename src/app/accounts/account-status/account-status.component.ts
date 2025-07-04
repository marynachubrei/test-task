import { Component } from '@angular/core';

@Component({
  selector: 'app-account-status',
  templateUrl: './account-status.component.html',
  styleUrls: ['./account-status.component.scss']
})
export class AccountStatusComponent {
  accountStatusId = 5
  statuses=[{
    name: "Submitted",
    id:1
  }, {
    name: "Review",
    id:2
  },
    {
      name: "Quote",
      id:3
    },
    {
      name: "Bind",
      id:4
    },{
      name: "Issue",
      id:5
    },{
      name: "Renew",
      id:6
    }]
}

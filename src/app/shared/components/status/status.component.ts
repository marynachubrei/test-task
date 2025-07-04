import {Component, Input} from '@angular/core';
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
  imports: [
    JsonPipe
  ],
  standalone: true
})
export class StatusComponent {
  @Input() status=""
  statuses = {
    new: "New",
    pending: "Pending",
    pendingReview: "Pending Review",
    completed: "Completed",
    active: "Active",
    underReview: "Under review"
  }
statusesList ={
  [this.statuses.new]: '#3464bc',
  [this.statuses.pendingReview]: '#fdd261',
  [this.statuses.pending]: '#fdd261',
  [this.statuses.completed]: '#3bb979',
  [this.statuses.active]: '#3bb979',
  [this.statuses.underReview]: '#1d40b0'

}
}

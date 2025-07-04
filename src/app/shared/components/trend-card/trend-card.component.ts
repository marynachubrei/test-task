import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-trend-card',
  templateUrl: './trend-card.component.html',
  styleUrls: ['./trend-card.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class TrendCardComponent implements OnInit {
  data: number[] = [10, 9, 12, 11, 14, 14, 15]; // Sample data
  labels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'Now'];
  points = '';

  ngOnInit(): void {
    const max = Math.max(...this.data);
    const min = Math.min(...this.data);
    const stepX = 100 / (this.data.length - 1);

    this.points = this.data.map((val, i) => {
      const x = i * stepX;
      const y = 40 - ((val - min) / (max - min)) * 30 - 5;
      return `${x},${y}`;
    }).join(' ');
  }
}

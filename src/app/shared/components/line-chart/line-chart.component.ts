import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class LineChartComponent {
  data = [10, 9, 13, 12, 15];
  labels = ['Jan', 'Feb', 'Mar', 'Apr', 'Now'];
  points = '';

  ngOnInit() {
    const max = Math.max(...this.data);
    const min = Math.min(...this.data);
    const range = max - min || 1;

    const stepX = 100 / (this.data.length - 1);
    const padding = 4;

    this.points = this.data
      .map((value, i) => {
        const x = i * stepX;
        const y = 40 - ((value - min) / range) * (40 - padding * 2) - padding;
        return `${x},${y}`;
      })
      .join(' ');
  }
}

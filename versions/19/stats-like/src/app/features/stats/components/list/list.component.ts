import { Component, computed, inject } from '@angular/core';
import { GetAllStatsBusinessService } from '../../services/get-all-stats-business.service';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  imports: [BaseChartDirective]
})
export class ListComponent {
  private readonly business = inject(GetAllStatsBusinessService)
  items = this.business.stats
  years = this.business.years
  values = this.business.successByYear

  chartOptions: ChartOptions<'line'> = {
    responsive: false
  };

  lineChartData = computed<ChartConfiguration<'line'>['data'] | undefined>(() => {
    const years = this.years()
    const values = this.values()

    if(! years || ! values) {
      return
    }

    const line = {
      labels: years,
      datasets: [
        {
          data: values,
          label: 'Series A',
          fill: true,
          tension: 0.5,
          borderColor: 'black',
          backgroundColor: 'rgba(81, 0, 255, 0.3)'
        },
      ]
    }

    return line
  })
}

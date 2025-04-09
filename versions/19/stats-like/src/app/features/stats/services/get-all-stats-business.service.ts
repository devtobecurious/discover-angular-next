import { computed, inject, Injectable, Signal } from '@angular/core';
import { GetAllStatsService } from './get-all-stats.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { StatisticList } from '../models';

@Injectable()
export class GetAllStatsBusinessService {
  private readonly infra = inject(GetAllStatsService)
  private readonly statsSignal = toSignal(this.infra.getAll()) // take(1)

  get years() {
    return computed(() => [... new Set(this.stats()?.map(item => item.year))])
  }

  get successByYear() {
    return computed(() => {
      const stats = this.stats()
      const values: Record<number, number> = {}

      stats?.forEach(stat => {
        if(!values[stat.year]) {
          values[stat.year] = 0
        }
        values[stat.year] += stat.nbSuccess
      })

      return Object.values(values)
    })
  }

  get stats(): Signal<StatisticList | undefined> {
    return this.statsSignal
  }
}

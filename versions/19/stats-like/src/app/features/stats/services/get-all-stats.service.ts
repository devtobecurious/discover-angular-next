import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { StatisticList } from '../models';

@Injectable()
export class GetAllStatsService {
  getAll(): Observable<StatisticList> {
    const table: StatisticList = [
      { year: 2023, month: 1, nbSuccess: 10, nbFailed: 0 },
      { year: 2023, month: 2, nbSuccess: 10, nbFailed: 0 },
      { year: 2023, month: 3, nbSuccess: 10, nbFailed: 0 },
      { year: 2024, month: 4, nbSuccess: 10, nbFailed: 0 },
      { year: 2024, month: 5, nbSuccess: 10, nbFailed: 0 },
      { year: 2024, month: 6, nbSuccess: 10, nbFailed: 0 },
      { year: 2025, month: 7, nbSuccess: 10, nbFailed: 0 },
      { year: 2025, month: 8, nbSuccess: 10, nbFailed: 0 },
      { year: 2025, month: 9, nbSuccess: 10, nbFailed: 0 },
      { year: 2025, month: 10, nbSuccess: 10, nbFailed: 0 },
      { year: 2025, month: 11, nbSuccess: 10, nbFailed: 0 },
      { year: 2025, month: 12, nbSuccess: 10, nbFailed: 0 },
    ]

    return of(table).pipe(delay(1500))
  }
}

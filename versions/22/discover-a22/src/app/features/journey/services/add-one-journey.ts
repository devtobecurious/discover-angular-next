import { inject, Service } from '@angular/core';
import { Journey } from '../models';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Service()
export class AddOneJourney {
    private readonly http = inject(HttpClient);

    save(item: Journey): Promise<Journey> {
        return firstValueFrom(this.http.post<Journey>('/api/journey', item));
    }
}

import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { ToLowerService } from './to-lower.service';

export type wookie = {
  name: string
};

@Injectable({
  providedIn: 'root'
})
export class WookiesService {

  constructor(private toLowerService: ToLowerService) { }

  getAllAsArray(): wookie[] {
    return [
      { name: this.toLowerService.transform('Chewie') },
      { name: this.toLowerService.transform('Chewa') },
    ]
  }
}

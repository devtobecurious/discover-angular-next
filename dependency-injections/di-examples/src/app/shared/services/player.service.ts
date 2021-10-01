import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

export class PlayerService {
  constructor(private logger: LoggerService, private isAuthenticated: boolean) {
    this.logger.log('created', isAuthenticated);
  }
}

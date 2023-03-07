import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { MeteoApiResult } from './models';
import { getCurrentRawMeteo } from './services';

@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent {
  public meteoResult$ = getCurrentRawMeteo();
}

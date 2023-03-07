import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteoComponent } from '../../shared/ui/meteo/meteo.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MeteoComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

}

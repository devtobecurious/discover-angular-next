import { Component } from '@angular/core';
import { DotMenuComponent } from '../../shared/ui/components/menus/dot-menu/dot-menu.component';

@Component({
  selector: 'dtbc-home-page',
  standalone: true,
  imports: [DotMenuComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePageComponent {

}

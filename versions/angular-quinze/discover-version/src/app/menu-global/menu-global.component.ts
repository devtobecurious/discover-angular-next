import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-global',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-global.component.html',
  styleUrls: ['./menu-global.component.css']
})
export class MenuGlobalComponent {

}

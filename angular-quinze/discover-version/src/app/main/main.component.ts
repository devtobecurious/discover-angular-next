import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestSingletonService } from '../services/test-singleton.service';
import { ChildOneComponent } from '../childs/child-one/child-one.component';
import { MenuGlobalComponent } from '../menu-global/menu-global.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterModule,
    ChildOneComponent,
    MenuGlobalComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(protected readonly service: TestSingletonService) {}
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestSingletonService } from 'src/app/services/test-singleton.service';

@Component({
  selector: 'app-child-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent {
  constructor(protected readonly service: TestSingletonService) {}
}

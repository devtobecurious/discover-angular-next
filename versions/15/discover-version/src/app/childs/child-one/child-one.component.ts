import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestSingletonService } from 'src/app/services/test-singleton.service';
import { ChildTwoComponent } from '../child-two/child-two.component';

@Component({
  selector: 'app-child-one',
  standalone: true,
  imports: [CommonModule, ChildTwoComponent],
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css'],
  providers: [
    TestSingletonService
  ]
})
export class ChildOneComponent {
  constructor(protected readonly service: TestSingletonService) {}
}

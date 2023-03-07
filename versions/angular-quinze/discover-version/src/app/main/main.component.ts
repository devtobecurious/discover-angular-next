import { Component, EnvironmentInjector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { getFilms } from '../actions';
import { ChildOneComponent } from '../childs/child-one/child-one.component';
import { MenuGlobalComponent } from '../menu-global/menu-global.component';
import { TestSingletonService } from '../services/test-singleton.service';
import { ChangeColorHeightDirective } from '../tools/ui/directives/change-color-height.directive';
import { TestColorDirective } from '../tools/ui/directives/test-color/test-color.directive';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterModule,
    ChildOneComponent,
    MenuGlobalComponent,
    TestColorDirective
    //TestColorModule
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  hostDirectives: [
    ChangeColorHeightDirective,
    // TestColorDirective
  ]
})
export class MainComponent {
  constructor(protected readonly service: TestSingletonService,
    private readonly injector: EnvironmentInjector) { }

  executeActionWithInject(): void {

    this.injector.runInContext(() => {
      getFilms();
    })
  }
}

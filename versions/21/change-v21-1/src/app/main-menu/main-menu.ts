import { Component, inject } from '@angular/core';
import { isActive, Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.css',
  imports: [RouterLink],
})
export class MainMenu {
  private readonly router = inject(Router);
  protected readonly listIsActive = isActive('/storms', this.router, {
    paths: 'exact',
    queryParams: 'ignored',
    fragment: 'ignored',
    matrixParams: 'ignored'
  });
}

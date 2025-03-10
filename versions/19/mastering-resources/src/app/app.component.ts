import { Component, EnvironmentInjector, inject, OnInit, resource, runInInjectionContext, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetAllMovie, OneMovie } from './services/get-all-movie';
import { FormsModule } from '@angular/forms';
import { GetAllPerson } from './services/get-all-people';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private service = inject(GetAllMovie)
  private personService = inject(GetAllPerson)
  private environmentInjector = inject(EnvironmentInjector);
  searchValue = signal('')

  loadPerson = rxResource({
    defaultValue: [],
    loader: () => {
      console.info('loader rxResource')
      return this.personService.getAll()
    }
  })

  loadMovies = resource({
    defaultValue: [],
    // loader: () => {
    //   console.info('loader')
    //   return this.service.getAll()
    // }
    request: () => ({filter: this.searchValue()}),
    loader: ({request, previous}) => {
      console.info('loader ', previous.status)

      return this.service.getAll(request.filter)
    }
  })

  reloadData(): void {
    console.info(this.loadMovies.reload())
  }

  ngOnInit(): void {
    console.info('ngOnInit')
    // runInInjectionContext(this.environmentInjector, () => {
    //   const loadMovies = resource({
    //     defaultValue: [],
    //     loader: () => {
    //       return this.service.getAll()
    //     }
    //   })
    // })
  }



}

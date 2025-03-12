import { Component, EnvironmentInjector, inject, OnInit, resource, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetAllMovie } from './services/get-all-movie';
import { rxResource } from '@angular/core/rxjs-interop';
import { GetAllPersonList } from './services/get-all-person';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private readonly service = inject(GetAllMovie)
  private readonly personService = inject(GetAllPersonList)
  private environmentInjector = inject(EnvironmentInjector)
  private readonly persons$ = this.personService.getAll().pipe(finalize(() => console.info('FINALIZE')))
  searchValue = signal('')

  loadPersons = rxResource({
    defaultValue: [],
    request: () => ({filter: this.searchValue()}),
    loader: () => {
      console.info('===> rxResource')
      return this.persons$
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

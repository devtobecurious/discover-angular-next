import { Component, resource, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

type Person = {
  name: string
}

type ApiReturn = {
  results: Person[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 title = signal('This is title')

 peopleResource = resource({
  request: () => ({title: this.title()}),
  loader: ({request}) => this.fetchPeople()
 })


  async fetchPeople(): Promise<ApiReturn> {
    const response = await fetch('https://swapi.dev/api/people')
    const people = response.json()

    return people
  }

  ngOnInit(): void {
    console.info('--------------')

    console.info('SYNC')
    this.title.update(prev => {
      console.info('New title')
      return 'New title'
    })

    console.info('****************')
  }

  info(): void {
    console.info('info')

  }
}

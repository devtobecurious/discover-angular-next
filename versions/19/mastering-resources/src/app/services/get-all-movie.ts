import { Injectable } from "@angular/core"

export interface OneMovie {
    title: string
    description: string
}

@Injectable({
  providedIn: 'root'
})
export class GetAllMovie {
  getAll(filter = ''): Promise<OneMovie[]> {
    console.info('getAll', filter)
    return new Promise<OneMovie[]>((resolve, error) => {
      console.info('getAll: timeOut')
      setTimeout(() => {
        console.info('getAll: timeOut: after')
        let table: OneMovie[] = [
          { title: 'Star wars 01', description: 'Skywalker' },
          { title: 'Star wars 02', description: 'Solo' }
        ]

        if(filter !== '') {
          table = table.filter(item => item.title.includes(filter))
        }

        // error('plouf')
        resolve(table)
      }, 2500);
    })
  }
}

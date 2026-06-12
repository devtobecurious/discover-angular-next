import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, injectAsync, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { form, FormField, FormRoot, required, schema, validateAsync } from '@angular/forms/signals';
import { of } from 'rxjs';

@Component({
  selector: 'app-test-one',
  imports: [FormRoot, FormField],
  templateUrl: './test-one.html',
  styleUrl: './test-one.css',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class TestOne {
  private readonly getUserAsync = injectAsync(() => import('../get-user').then(m => m.GetUser));

  protected readonly resource = resource({
    loader: () => fetch('/api/data').then(res => res.json())
  }) //httpResource(() => '/api/data');

  private readonly user = signal<{ surname: string }>({ surname: 'Obi' });
  private readonly schema = schema<{ surname: string }>(ctx => {
    required(ctx.surname);
    validateAsync(ctx.surname, {
      params: ctx => ctx.value(),
      factory: (params) => httpResource(() => '/api/validate-surname'),
      onError: () => {
        console.log('Validation failed');
        return { kind: 'invalidSurname' };
      },
      onSuccess: () => {
        console.log('Validation succeeded');
      }
    });
  });
  protected readonly userForm = form(this.user, this.schema);

  ngOnInit(): void {
    const getUser = this.getUserAsync();
    getUser.then(service =>
      service.getOne().subscribe(item => {
        console.log('User loaded', item);
      })
    );
  }
}

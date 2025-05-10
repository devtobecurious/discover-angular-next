import { Component, computed, inject, signal } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService, Translation } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';



@Component({
  selector: 'app-add',
  imports: [TranslatePipe, TranslateDirective, AsyncPipe],
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {
  private readonly translate = inject(TranslateService)
  private readonly http = inject(HttpClient)
  param = signal({value: 'world'});
  langs = signal<string[]>([])
  currentLang = signal('en');

  helloComputed = computed(() => {
    const lang = this.currentLang()
    return this.translate.get('app-list.hello', this.param())
  })


  constructor() {
    this.translate.addLangs(['fr', 'en'])
    this.langs.set(this.translate.getLangs())
    this.translate.setDefaultLang('en')
    this.translate.use('en')

    this.helloComputed().subscribe(item => console.info(item))
  }

  changeParam(): void {
    const result = prompt('Enter a new value:', this.param().value);
    if (result) {
      this.param.update(p => ({value: result}));
    }
  }

  onChange(code: string): void {
    this.translate.use(code)
    this.currentLang.set(code)
  }
}

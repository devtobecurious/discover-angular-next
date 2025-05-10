import { Component } from '@angular/core';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective
} from "@ngx-translate/core";
import {inject, signal} from '@angular/core'
import translationsEN from "../../../../../../public/i18n/en.json";
import translationsFR from "../../../../../../public/i18n/fr.json";


@Component({
  selector: 'app-list',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  private readonly translate = inject(TranslateService)
  param = {value: 'world'};
  langs = signal<string[]>([])

  constructor() {
    this.translate.addLangs(['fr', 'en'])
    this.langs.set(this.translate.getLangs())
    this.translate.setTranslation('en', translationsEN)
    this.translate.setTranslation('fr', translationsFR)
    this.translate.setDefaultLang('en')
    this.translate.use('en')
  }

  onChange(code: string): void {
    this.translate.use(code)
  }
}

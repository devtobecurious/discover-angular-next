import { Component, signal } from '@angular/core';
import { Field, form } from '@angular/forms/signals';

@Component({
  selector: 'app-test-signal-form',
  imports: [Field],
  templateUrl: './test-signal-form.html',
  styleUrl: './test-signal-form.css',
})
export class TestSignalForm {
  private readonly planet = signal({ name: 'Earth', radius: 6371, hasLife: true });

  protected readonly planetForm = form(this.planet);
}

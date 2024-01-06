import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ErrorStateMatcher, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { GameConsole, SocialNetwork } from '../../models';
import { CollectGameBusiness } from '../../services/collecte-game.business';
import { SocialNetworkBusiness } from '../../services/social-network.business';
import {MatGridListModule} from '@angular/material/grid-list';
import { ConsoleBusiness } from '../../services/console.business';
import { map, shareReplay } from 'rxjs';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-collecte',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, MatCheckboxModule, ReactiveFormsModule, MatGridListModule, MatToolbarModule,MatCardModule, MatInputModule, MatSelectModule, MatExpansionModule, MatFormFieldModule, MatNativeDateModule, MatDatepickerModule, MatIconModule],
  templateUrl: './collecte.component.html',
  styleUrl: './collecte.component.css'
})
export class CollecteComponent implements OnInit {
  ngOnInit(): void {
    this.consoles$.subscribe(consoles => {
      consoles.forEach(console => this.addConsoleGameControl(console));
    })
  }
  private builder = inject(FormBuilder);
  private readonly gameConsoleBusiness = inject(ConsoleBusiness);

  consoles$ = this.gameConsoleBusiness.getAll().pipe(shareReplay(1));

  step = 0;
  selectedNetwork: SocialNetwork | undefined = undefined;
  networkDescription = signal<string>('');

  games$ = inject(CollectGameBusiness).getGameAll();
  networks$ = inject(SocialNetworkBusiness).getAll();
  matcher = new MyErrorStateMatcher();

  collectForm = this.builder.group({
    user: this.builder.group({
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    }),
    consoles: this.builder.group({
      list: this.builder.array<FormGroup>([], [Validators.required])
    }),
    game: this.builder.group({
      id: [-1, Validators.min(1)]
    }),
    network: this.builder.group({
      id: [-1, Validators.min(1)]
    })
  })

  private addConsoleGameControl(console: GameConsole): void {
    // const control = this.builder.control(false);
    // this.collectForm.controls.consoles.controls.list.push(control);
    this.collectForm.controls.consoles.controls.list.push(
      this.builder.group({
        id: console.id,
        isSelected: false
      })
    )
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  save(): void {

  }

  selectNetwork(network: SocialNetwork): void {
    this.selectedNetwork = network;
    this.collectForm.controls.network.controls.id.setValue(network.id);
    this.networkDescription.set(network.description);
  }

  get userGroupIsValid(): boolean {
    return this.collectForm.controls.user.valid;
  }

  get gameIdIsValid(): boolean {
    return this.collectForm.controls.game.controls.id.valid;
  }

  get networkIdIsValid(): boolean {
    return this.collectForm.controls.network.controls.id.valid;
  }

  get consolesIsValid(): boolean {
    return this.collectForm.controls.consoles.controls.list.valid;
  }
}

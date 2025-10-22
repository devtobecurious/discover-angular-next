import { Component, inject, signal } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { applyEach, Field, form, required, schema } from '@angular/forms/signals';

interface Friend {
  surname: string;
  firstname: string;
}

interface GameSession {
  startDate: string;
  startTime: string;
  friends: Friend[];
  gameName: string;
  gameCategory: string;
}

const sessionSchema = schema<GameSession>(context => {
  required(context.startDate);
  required(context.startTime);
  required(context.gameName);
  applyEach(context.friends, userSchema);
});

const userSchema = schema<Friend>(context => {
  required(context.surname);
  required(context.firstname);
});

@Component({
  selector: 'app-create-one-game-session',
  imports: [Field],
  templateUrl: './create-one-game-session.html',
  styleUrl: './create-one-game-session.css'
})
export class CreateOneGameSession {
  //protected readonly sessionForm: FormGroup;
  protected readonly isSubmitting = signal(false);
  protected readonly gameCategories = [
    { value: 'fps', label: '🔫 FPS' },
    { value: 'moba', label: '⚔️ MOBA' },
    { value: 'battle-royale', label: '👑 Battle Royale' },
    { value: 'rpg', label: '🗡️ RPG' },
    { value: 'strategy', label: '🧠 Stratégie' },
    { value: 'racing', label: '🏎️ Course' },
    { value: 'sport', label: '⚽ Sport' },
    { value: 'puzzle', label: '🧩 Puzzle' }
  ];

  protected readonly availableGames = [
    // FPS
    { name: 'Call of Duty: Modern Warfare', category: 'fps', icon: '🔫' },
    { name: 'Counter-Strike 2', category: 'fps', icon: '🔫' },
    { name: 'Valorant', category: 'fps', icon: '🔫' },
    { name: 'Overwatch 2', category: 'fps', icon: '🔫' },

    // MOBA
    { name: 'League of Legends', category: 'moba', icon: '⚔️' },
    { name: 'Dota 2', category: 'moba', icon: '⚔️' },
    { name: 'Heroes of the Storm', category: 'moba', icon: '⚔️' },

    // Battle Royale
    { name: 'Fortnite', category: 'battle-royale', icon: '👑' },
    { name: 'PUBG', category: 'battle-royale', icon: '👑' },
    { name: 'Apex Legends', category: 'battle-royale', icon: '👑' },
    { name: 'Fall Guys', category: 'battle-royale', icon: '👑' },

    // RPG
    { name: 'World of Warcraft', category: 'rpg', icon: '🗡️' },
    { name: 'Final Fantasy XIV', category: 'rpg', icon: '🗡️' },
    { name: 'Elden Ring', category: 'rpg', icon: '🗡️' },
    { name: 'Diablo IV', category: 'rpg', icon: '🗡️' },

    // Stratégie
    { name: 'Age of Empires IV', category: 'strategy', icon: '🧠' },
    { name: 'StarCraft II', category: 'strategy', icon: '🧠' },
    { name: 'Civilization VI', category: 'strategy', icon: '🧠' },

    // Course
    { name: 'Forza Horizon 5', category: 'racing', icon: '🏎️' },
    { name: 'Gran Turismo 7', category: 'racing', icon: '🏎️' },
    { name: 'F1 23', category: 'racing', icon: '🏎️' },

    // Sport
    { name: 'FIFA 24', category: 'sport', icon: '⚽' },
    { name: 'NBA 2K24', category: 'sport', icon: '🏀' },
    { name: 'Rocket League', category: 'sport', icon: '🚗' },

    // Puzzle
    { name: 'Among Us', category: 'puzzle', icon: '🧩' },
    { name: 'Portal 2', category: 'puzzle', icon: '🧩' },
    { name: 'Tetris Effect', category: 'puzzle', icon: '🧩' }
  ];

  private readonly session = signal<GameSession>({
    startDate: '',
    startTime: '',
    friends: [{ surname: '', firstname: '' }],
    gameName: '',
    gameCategory: ''
  });

  protected readonly sessionForm = form(this.session, sessionSchema);
  private readonly router = inject(Router);

  // constructor(
  //   private fb: FormBuilder,
  //   private router: Router
  // ) {
  //   this.sessionForm = this.fb.group({
  //     startDate: ['', [Validators.required]],
  //     startTime: ['', [Validators.required]],
  //     friends: this.fb.array([]),
  //     gameName: ['', [Validators.required]]
  //   });

  //   // Ajouter un ami par défaut
  //   this.addFriend();
  // }

  get friendsArray(): Friend[] {
    return this.sessionForm.friends().value();
    //return this.sessionForm.get('friends') as FormArray;
  }

  getGamesByCategory(category: string) {
    return this.availableGames.filter(game => game.category === category);
  }

  addFriend(): void {
    // const friendGroup = this.fb.group({
    //   surname: ['', [Validators.required, Validators.minLength(2)]],
    //   firstname: ['', [Validators.required, Validators.minLength(2)]]
    // });
    // this.friendsArray.push(friendGroup);
    this.sessionForm.friends().value.update(old => [...old, { surname: '', firstname: '' }]);
  }

  removeFriend(index: number): void {
    if (this.friendsArray.length > 1) {
      //this.friendsArray.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.sessionForm().valid()) {
      this.isSubmitting.set(true);

      const formData: GameSession = this.sessionForm().value();
      console.log('Session créée:', formData);

      // Simulation d'une sauvegarde
      setTimeout(() => {
        this.isSubmitting.set(false);
        alert('🎉 Session créée avec succès ! Préparez-vous à jouer !');
        this.router.navigate(['/']);
      }, 2000);
    } else {
      this.markFormGroupTouched();
    }
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }

  private markFormGroupTouched(): void {
    // Object.keys(this.sessionForm.controls).forEach(key => {
    //   const control = this.sessionForm.get(key);
    //   control?.markAsTouched();

    //   if (control instanceof FormArray) {
    //     control.controls.forEach(group => {
    //       if (group instanceof FormGroup) {
    //         Object.keys(group.controls).forEach(groupKey => {
    //           group.get(groupKey)?.markAsTouched();
    //         });
    //       }
    //     });
    //   }
    // });
  }

  isFieldInvalid(fieldName: keyof GameSession): boolean {
    const field = this.sessionForm[fieldName];
    // this.sessionForm().errorSummary().filter(error => error.field().name() === fieldName);
    // return !!(field && field.invalid && field.touched);

    return field().invalid() && field().touched();
  }

  getValueOfField(fieldName: keyof GameSession): any {
    const field = this.sessionForm[fieldName];
    return field().value();
  }

  isArrayFieldInvalid(arrayName: string, index: number, fieldName: string): boolean {
    // const array = this.sessionForm.get(arrayName) as FormArray;
    // const field = array.at(index)?.get(fieldName);
    // return !!(field && field.invalid && field.touched);
    return false;
  }
}

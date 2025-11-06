import { Component, computed, inject, signal } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Field, FieldTree, form } from '@angular/forms/signals';
import { createEmptySession, GameSession, sessionSchema } from '../../models/game-session';
import { createEmptyFriend, Friend } from '../../models/friend';





@Component({
  selector: 'app-create-one-game-session',
  templateUrl: './create-one-game-session.html',
  styleUrl: './create-one-game-session.css',
  //imports: [ReactiveFormsModule, CommonModule]
  imports: [Field]
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

  private readonly router = inject(Router);
  private readonly sessionState = signal(createEmptySession());
  protected readonly sessionForm = form(this.sessionState, sessionSchema);

  protected readonly disableToSubmit = computed(() => this.sessionForm().invalid() || this.isSubmitting())

  getGamesByCategory(category: string) {
    return this.availableGames.filter(game => game.category === category);
  }

  addFriend(): void {
    this.sessionForm.friends().value.update(oldValue => [...oldValue, createEmptyFriend()]);
  }

  removeFriend(index: number): void {
    if (this.friendsArray.length > 1) {
      this.sessionForm.friends().value.update(oldValue => oldValue.filter((_, i) => i !== index));
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

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
    Object.keys(this.sessionForm).forEach(key => {
      const field = this.sessionForm[key as keyof GameSession];
      field().markAsTouched();
    })
  }

  get friendsArray(): Friend[] {
    return this.sessionForm.friends().value();
  }

  isFieldInvalid(fieldName: keyof GameSession): boolean {
    const field = this.sessionForm[fieldName];
    return field().invalid() && field().touched();
  }

  getValueOfField(fieldName: keyof GameSession): string | Friend[] {
    const field = this.sessionForm[fieldName];
    return field().value();
  }

  isArrayFieldInvalid(friend: FieldTree<Friend, number>, fieldName: keyof Friend): boolean {
    return friend[fieldName]().invalid() && friend[fieldName]().touched();
  }
}




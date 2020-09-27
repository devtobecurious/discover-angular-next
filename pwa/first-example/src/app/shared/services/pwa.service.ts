import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { Platform } from '@angular/cdk/platform';
import { timer } from 'rxjs';
import { PromptComponent } from '../components/prompt/prompt.component';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private promptEvent: any;

  constructor(private bottomSheet: MatBottomSheet, private platform: Platform) { }

  public initPwaPrompt() {
    if (this.platform.ANDROID) {
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault();
        this.promptEvent = event;
        this.openPromptComponent('android');
      });
    }

    if (this.platform.IOS) {
      const isInStandalone = ('standalone' in window.navigator) && (window.navigator['standalone'])
      if (! isInStandalone) {
        this.openPromptComponent('ios');
      }
    }
  }

  private openPromptComponent(mobileType: 'ios' | 'android') {
    timer(3000).
      pipe(take(1)).subscribe(() => this.bottomSheet.open(PromptComponent))
  }
}

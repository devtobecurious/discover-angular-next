import { AdTwoComponent } from './../ad-two/ad-two.component';
import { AdOneComponent } from './../ad-one/ad-one.component';
import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef, OnDestroy, Type, ViewChild, AfterViewInit } from '@angular/core';
import { from, interval, Observable, Subject } from 'rxjs';
import { map, mergeMap, switchMap, takeUntil, filter } from 'rxjs/operators';
import { AdThreeComponent } from '../ad-three/ad-three.component';

@Component({
  selector: 'app-ad-all',
  templateUrl: './ad-all.component.html',
  styleUrls: ['./ad-all.component.css']
})
export class AdAllComponent implements OnInit, OnDestroy, AfterViewInit {
  destroy$: Subject<boolean> = new Subject();
  private components = [AdOneComponent, AdTwoComponent, AdThreeComponent];
  @ViewChild('ref', {read: ViewContainerRef}) containerRef: ViewContainerRef;

  constructor(private componentResolver: ComponentFactoryResolver) { }

  ngAfterViewInit(): void {
    interval(1000).pipe(
      takeUntil(this.destroy$),
      switchMap(tick => from(this.importComponent(tick))),
      filter(item => item)
    ).subscribe(item => {
        this.containerRef.clear();
        this.containerRef.createComponent(item);
    });
  }


  ngOnInit(): void {

  }

  async importComponent(tick: number): Promise<any> {
    const index = tick % 3;
    let result = null;

    if (! isNaN(index)) {
      result = this.componentResolver.resolveComponentFactory(this.components[index]);
    }

    return result;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

import {
  Directive,
  Output,
  EventEmitter,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  /* eslint-disable @angular-eslint/directive-selector */
  selector: '[scrollTracker]',
})
export class ScrollTrackerDirective implements OnDestroy, OnInit {
  @Output() scrollingFinished = new EventEmitter<void>();
  subscriptions!: Subscription;

  ngOnInit(): void {
    this.subscriptions = fromEvent(window, 'scroll')
      .pipe(debounceTime(500))
      .subscribe((_) => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          this.scrollingFinished.emit();
        }
      });
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }
}

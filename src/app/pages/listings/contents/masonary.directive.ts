import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appMasonary]',
})
export class MasonaryDirective implements OnInit, OnDestroy {
  private observer = new MutationObserver(() => {
    this.cardElments.forEach((cardElement) => {
      this.resizeMasonryItem(cardElement as HTMLElement);
    });
  });

  constructor(private gridElement: ElementRef) {}

  get cardElments() {
    return Array.from(this.gridElement.nativeElement.children);
  }

  ngOnInit() {
    this.observer.observe(this.gridElement.nativeElement, { childList: true });
  }

  //Reference:https://w3bits.com/css-grid-masonry/
  resizeMasonryItem = (cardeElment: HTMLElement) => {
    /* Get the grid object, its row-gap, and the size of its implicit rows */
    const grid = this.gridElement.nativeElement;
    const rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue('grid-row-gap'),
      10
    );
    const rowHeight = 0;
    const rowSpan = Math.ceil(
      (cardeElment.querySelector('.listing-card')!.getBoundingClientRect()
        .height +
        rowGap) /
        (rowHeight + rowGap)
    );
    cardeElment.style.gridRowEnd = `span ${rowSpan}`;
  };

  ngOnDestroy() {
    this.observer.disconnect();
  }
}

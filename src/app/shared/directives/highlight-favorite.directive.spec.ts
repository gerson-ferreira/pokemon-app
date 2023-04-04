import { HighlightFavoriteDirective } from './highlight-favorite.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('HighlightFavoriteDirective', () => {
  let elMock: ElementRef;
  let rendererMock: Renderer2;

  beforeEach(() => {
    elMock = {
      nativeElement: document.createElement('div'),
    } as ElementRef;

    const rendererMock = {
      addClass: () => null,
      removeClass: () => null,
      setStyle: () => null,
      removeStyle: () => null,
      destroy: () => null,
      createElement: () => null,
      createComment: () => null,
      createText: () => null,
      appendChild: () => null,
      selectRootElement: () => null,
      parentNode: () => null,
      nextSibling: () => null,
      setAttribute: () => null,
      removeAttribute: () => null,
      setValue: () => null,
      listen: () => null,
    } as unknown as Renderer2;
  });

  it('should create an instance', () => {
    const directive = new HighlightFavoriteDirective(elMock, rendererMock);
    expect(directive).toBeTruthy();
  });
});

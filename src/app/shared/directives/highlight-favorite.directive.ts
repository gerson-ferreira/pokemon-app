import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlightFavorite]',
})
export class HighlightFavoriteDirective implements OnChanges {
  @Input()
  appHighlightFavorite!: boolean;

  // Inicialize a propriedade isFavorite com um valor padrão (false)
  private isFavorite: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.isFavorite = this.appHighlightFavorite;
    this.updateBackgroundColor();
  }

  private updateBackgroundColor(): void {
    if (this.isFavorite) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        '#f2f2f2'
      );
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }
  }
}

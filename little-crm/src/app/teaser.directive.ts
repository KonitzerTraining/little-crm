import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appTeaser]'
})
export class TeaserDirective implements OnInit {

  @Input() appTeaser;
  @Input() data;

  constructor(private el: ElementRef) {
  }

  public ngOnInit(): void {
    if (this.data === '' || this.data === null) {
      this.el.nativeElement.style.backgroundColor = this.appTeaser;
    }
  }

}

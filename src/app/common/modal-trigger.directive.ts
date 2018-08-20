import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Directive({
  selector: '[appModalTrigger]',
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input() appModalTrigger: string;

  constructor(
    @Inject(JQ_TOKEN) private $: any,
    ref: ElementRef
  ) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', event => {
      this.$(`#${this.appModalTrigger}`).modal({});
    });
  }
}

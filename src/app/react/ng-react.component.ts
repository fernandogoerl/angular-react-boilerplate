import {Component, ElementRef, inject, Input} from '@angular/core';
import {ComponentProps, createElement, ElementType} from 'react';
import {createRoot} from 'react-dom/client';

@Component({
  selector: 'ng-react',
  template: '',
})
export class NgReactComponent<Comp extends ElementType> {
  @Input() component: Comp;
  @Input() props: ComponentProps<Comp>;

  private root = createRoot(inject(ElementRef).nativeElement);

  ngOnChanges() {
    this.root.render(createElement(this.component, this.props));
  }

  ngOnDestroy() {
    this.root.unmount();
  }
}

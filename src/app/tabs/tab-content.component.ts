import {Component, TemplateRef, ViewChild} from '@angular/core';
@Component({
  selector: 'tab-content',
  template: '<ng-template><ng-content></ng-content></ng-template>'
})
export class TabContentComponent {
  @ViewChild(TemplateRef) public templateRef?: TemplateRef<any>;
  constructor() {}
}

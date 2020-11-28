import {AfterViewInit, Component, ContentChild} from '@angular/core';

import {TabContentComponent} from './tab-content.component';
import {TabTitleComponent} from './tab-title.component';
import {TabsService} from './tabs.service';

@Component({
  selector: 'tab',
  template: '<ng-content></ng-content>'
})
export class TabComponent implements AfterViewInit {

  @ContentChild(TabTitleComponent) private titleTpl: TabTitleComponent;
  @ContentChild(TabContentComponent) private contentTpl: TabContentComponent;

  constructor(private tabsService: TabsService) {

  }

  public ngAfterViewInit(): void {
    // @ts-ignore
    this.tabsService.register(this.titleTpl.templateRef, this.contentTpl.templateRef);
  }
}

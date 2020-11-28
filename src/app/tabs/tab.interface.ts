import {TabTitleComponent} from './tab-title.component';
import {TabContentComponent} from './tab-content.component';
import {TemplateRef} from '@angular/core';

export interface ITab {
  id: number;
  title: TemplateRef<TabTitleComponent>;
  content: TemplateRef<TabContentComponent>;
  isActive: boolean;
  isInited: boolean;
}

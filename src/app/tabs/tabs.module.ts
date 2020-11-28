import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TabsComponent} from './tabs.component';
import {TabComponent} from './tab.component';
import {TabContentComponent} from './tab-content.component';
import {TabTitleComponent} from './tab-title.component';

@NgModule({
  declarations: [TabsComponent, TabComponent, TabContentComponent, TabTitleComponent],
  imports: [
    CommonModule
  ],
  exports: [TabsComponent, TabComponent, TabContentComponent, TabTitleComponent]
})
export class TabsModule { }

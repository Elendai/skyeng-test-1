import {Component} from '@angular/core';
import {TabsService} from './tabs.service';

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.component.html',
  providers: [TabsService]
})
export class TabsComponent {

  constructor(public tabsService: TabsService) {
  }
}

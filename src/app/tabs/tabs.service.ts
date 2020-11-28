import {Injectable, TemplateRef} from '@angular/core';

import {ITab} from './tab.interface';

@Injectable()
export class TabsService {

  public tabs: Array<ITab> = [];

  private incrementalId: number = 1;

  constructor() {
  }

  public select(id: number): void {
    for (const t of this.tabs) {
      if (t.id === id) {
        t.isActive = true;
        t.isInited = true;
      } else {
        t.isActive = false;
      }
    }
  }

  public register(title: TemplateRef<any>, content: TemplateRef<any>): void {
    const tab: ITab = {
      id: this.incrementalId++,
      isActive: this.tabs.length === 0,
      isInited: this.tabs.length === 0,
      title,
      content
    };
    this.tabs.push(tab);
  }

}

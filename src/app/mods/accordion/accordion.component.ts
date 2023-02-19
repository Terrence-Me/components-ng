import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  openedItemIndex = 0;

  @Input() data: any = [];

  onClick(idx: number) {
    if (idx === this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = idx;
    }
  }
}

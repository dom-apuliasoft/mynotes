import { Component, Input } from '@angular/core';
import { ColorTone, ColorUtils } from '../color-utils';

@Component({
  selector: 'mynotes-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() color = '#FFF';

  public get textTint(): ColorTone {
    return ColorUtils.getOppositeTone(this.color);
  }
}

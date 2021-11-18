import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotespaceEntity } from '@mynotes/api-types';

@Component({
  selector: 'mynotes-notespace',
  templateUrl: './notespace.component.html',
  styleUrls: ['./notespace.component.scss']
})
export class NotespaceComponent {

  @Input() notespace!: NotespaceEntity;
  @Output() delete = new EventEmitter<NotespaceEntity>();

}

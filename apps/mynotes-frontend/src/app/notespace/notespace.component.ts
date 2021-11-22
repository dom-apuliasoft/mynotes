import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import { NotespaceEntity } from '@mynotes/api-types';

@Component({
  selector: 'mynotes-notespace',
  templateUrl: './notespace.component.html',
  styleUrls: ['./notespace.component.scss'],
})
export class NotespaceComponent {
  @Input() notespace!: NotespaceEntity;
  @Output() delete = new EventEmitter<NotespaceEntity>();

  expandIcon = faExpandAlt;
  deleteIcon = faTrashAlt;

  buttonCSS = {
    dark: 'bg-gray-50 rounded-full text-gray-900 hover:bg-gray-900 hover:text-gray-50 fill-current w-10 h-10',
    light:
      'bg-gray-900 rounded-full text-gray-50 hover:bg-gray-50 hover:text-gray-900 fill-current w-10 h-10',
  };
}

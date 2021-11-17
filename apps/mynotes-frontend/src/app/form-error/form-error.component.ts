import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'mynotes-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent {

  @Input() control: AbstractControl | null = null;

  get errorMessage(): string {
    if (this.control?.touched && this.control.errors)
      return JSON.stringify(this.control.errors);

    return '';
  }

}

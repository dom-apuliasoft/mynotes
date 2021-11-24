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
    const errors = this.control?.errors;

    if (!this.control?.touched || !errors) return '';

    const messages: string[] = [];

    Object.entries(errors).forEach(entry => {
      const [prop, value] = entry;

      switch (prop) {
        case 'required':
          messages.push(`Field is required`);
          break;
        case 'minlength':
          console.log(value);
          messages.push(`Must be more than ${value.requiredLength} characters`);
          break;
        case 'maxlength':
          messages.push(`Must be less than ${value.requiredLength} characters`);
          break;
        default: {
          const msg = value.message ?? value;
          messages.push(msg.toString());
          break;
        }
      }
    });

    return messages.join(', ');
  }

}

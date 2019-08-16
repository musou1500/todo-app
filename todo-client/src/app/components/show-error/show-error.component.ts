import {Component, Host, Input} from '@angular/core';
import {FormGroupDirective, FormGroup} from '@angular/forms';

// from modules/playground/src/model_driven_forms/index.ts
@Component({
  selector: 'app-show-error',
  template: `
    <ion-note class="input-helper" color="danger" *ngIf="errorMessage !== null">
      {{ errorMessage }}
    </ion-note>
  `,
  styles: [
    `
      .input-helper {
        margin-left: 16px;
      }
    `,
  ],
})
export class ShowErrorComponent {
  formDir: FormGroupDirective;

  @Input()
  control: string;

  @Input()
  errors: string[] = ['required', 'email'];

  constructor(@Host() formDir: FormGroupDirective) {
    this.formDir = formDir;
  }

  get errorMessage(): string {
    const form: FormGroup = this.formDir.form;
    const control = form.get(this.control);
    if (control && control.touched) {
      for (let i = 0; i < this.errors.length; ++i) {
        if (control.hasError(this.errors[i])) {
          return this._errorMessage(this.errors[i]);
        }
      }
    }
    return null;
  }

  private _errorMessage(code: string): string {
    const config: {[key: string]: string} = {
      required: 'この項目は必須です',
      email: 'メールの形式に誤りがあります',
    };
    return config[code];
  }
}

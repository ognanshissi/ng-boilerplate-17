import { InjectionToken } from '@angular/core';

export type FormFieldAppearanceOption = 'fill' | 'outline';
export type FormFieldVariant = '' | '' | '';
export type FormFieldBorderRounded = 'small' | 'large' | 'full'; // 12px, 20px, 50%
export abstract class AbstractFormFieldConfigOptions {
  appearance!: FormFieldAppearanceOption;
  rounded?: FormFieldBorderRounded;
}

export class DefaultFormFieldConfigOptions implements AbstractFormFieldConfigOptions {
  appearance!: FormFieldAppearanceOption;
  rounded?: FormFieldBorderRounded;

  constructor() {
    this.appearance = 'fill';
    this.rounded = 'small';
  }
}

export const CORE_FORM_FIELD_OPTIONS = new InjectionToken<AbstractFormFieldConfigOptions>(
  'Core form field options',
  {
    providedIn: 'root',
    factory: () => new DefaultFormFieldConfigOptions(),
  }
);

export const CORE_AUTH_STORAGE_NAME = new InjectionToken<string>('CORE_AUTH_STORAGE_NAME', {
  providedIn: 'root',
  factory: () => 'core_access_token',
});

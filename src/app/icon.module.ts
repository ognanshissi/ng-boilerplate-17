import { NgModule, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule()
export class IconModule {
  private readonly _iconRegister = inject(MatIconRegistry);
  private readonly _sanitizer = inject(DomSanitizer);

  constructor() {
    // Register icon sets
    this._iconRegister.addSvgIconSet(
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg/icons/material-outline.svg'
      )
    );
    this._iconRegister.addSvgIconSetInNamespace(
      'mat_twotone',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg/icons/material-twotone.svg'
      )
    );
    this._iconRegister.addSvgIconSetInNamespace(
      'mat_solid',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg/icons/material-solid.svg'
      )
    );
    this._iconRegister.addSvgIconSetInNamespace(
      'iconsmind',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg/icons/iconsmind.svg'
      )
    );
    this._iconRegister.addSvgIconSetInNamespace(
      'feather',
      this._sanitizer.bypassSecurityTrustResourceUrl('assets/icons/feather.svg')
    );
    this._iconRegister.addSvgIconSetInNamespace(
      'heroicons_outline',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg/icons/heroicons-outline.svg'
      )
    );
    this._iconRegister.addSvgIconSetInNamespace(
      'heroicons_solid',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg/icons/heroicons-solid.svg'
      )
    );
    this._iconRegister.addSvgIcon(
      'chart-square',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg/icons/chart-square.svg'
      )
    );

    this._iconRegister.addSvgIcon(
      'clipboard-text',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg/icons/clipboard-text.svg'
      )
    );

    this._iconRegister.addSvgIcon(
      'configuration',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg/icons/configuration.svg'
      )
    );
    this._iconRegister.addSvgIcon(
      'profile',
      this._sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg/icons/profile.svg'
      )
    );
  }
}

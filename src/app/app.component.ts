import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material';

import { TableModel } from './models/table.model';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor( translateService: TranslateService) {
    translateService.addLangs(['en', 'de']);
    translateService.setDefaultLang('en');

    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', translateService.getDefaultLang());
    }

    const detectedLanguage = localStorage.getItem('language');
    translateService.use(detectedLanguage.match(/en|de/) ? detectedLanguage : translateService.getDefaultLang());
  }
}

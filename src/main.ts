import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Environment
import { environment } from './environments/environment';

// App Module
import { AppModule } from './app/app.module';

{
  registerLocaleData(localeUk, 'uk');

  if (environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic().bootstrapModule(AppModule);
}

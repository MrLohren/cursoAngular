import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

// LOCALE CONFIG
import localeEsCL from "@angular/common/locales/es-CL";
import localeFrCA from "@angular/common/locales/fr-CA";
import { registerLocaleData } from "@angular/common";

registerLocaleData( localeEsCL )
registerLocaleData( localeFrCA )

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide : LOCALE_ID, useValue: 'es-CL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

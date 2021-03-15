
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imported Syncfusion button module from buttons package.
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

import { AppComponent }  from './app.component';

@NgModule({
 imports:      [ BrowserModule, ButtonModule ], // Registering EJ2 Button Module
 declarations: [ AppComponent ],
 bootstrap:    [ AppComponent ]
})
export class AppModule { }
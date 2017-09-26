import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { PruebaComponent } from './src/app/app/prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PruebaComponent,
    LoginContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

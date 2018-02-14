import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormLocalVariableComponent } from './components/form-local-variable/form-local-variable.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLocalVariableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

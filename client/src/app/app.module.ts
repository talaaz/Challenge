import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TextInputComponent } from './components/text-input/text-input.component';

//angular material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

 import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HeaderComponent } from './components/header/header.component';
 


@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    ToolbarComponent,
    HeaderComponent,
 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

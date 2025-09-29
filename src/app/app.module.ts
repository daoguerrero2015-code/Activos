import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeardComponent } from './components/heard/heard.component';
import { BodyComponent } from './components/body/body.component';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ObservacionesComponent } from './components/observaciones/observaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HeardComponent,
    BodyComponent,
    ObservacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

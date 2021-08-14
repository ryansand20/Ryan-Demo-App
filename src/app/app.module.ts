import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';

const components = [AppComponent, LayoutComponent];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule
  ],
  declarations: components,
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { RightClickDirective } from './core/directives/right-click.directive';
import { AgePipe } from './shared/pipes/age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RightClickDirective,
    AgePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

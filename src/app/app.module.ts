import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SqrtPipe } from './app.sqrt';
import { ChangeTextDirective } from './change-text.directive';
import { ChangeColorDirective } from './change-color.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    SqrtPipe,
    RoutingComponent,
    ChangeTextDirective,
    ChangeColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

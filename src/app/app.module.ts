import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { AppRoutingModule } from './app-routing.module'; // Import the routing module

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SignupComponent, GameComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, // Add AppRoutingModule here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

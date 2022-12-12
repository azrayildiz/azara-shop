import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './general/material/material.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AppRouterModule } from './general/app-router/app-router.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderImagesComponent } from './components/slider-images/slider-images.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    LandingPageComponent,
    SliderImagesComponent,
    AdvantagesComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MaterialModule, 
    AppRouterModule, 
    FontAwesomeModule, 
    FormsModule,
    ReactiveFormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

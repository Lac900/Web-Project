import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { CalculatriceComponent } from './components/calculatrice/calculatrice.component';
import { ButtonCComponent } from './components/button-c/button-c.component';
import { PhotoSwapComponent } from './components/photo-swap/photo-swap.component';
import { PixelImageComponent } from './pixel-image/pixel-image.component';
import { JeuxCharlyComponent } from './jeux-charly/jeux-charly.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainHeaderComponent,
    CalculatriceComponent,
    ButtonCComponent,
    PhotoSwapComponent,
    PixelImageComponent,
    JeuxCharlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

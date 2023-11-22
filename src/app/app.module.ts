import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { StatsSectionComponent } from './stats-section/stats-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { ServiceItemComponent } from './service-item/service-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroSectionComponent,
    StatsSectionComponent,
    ServicesSectionComponent,
    ServiceItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { StatsSectionComponent } from './stats-section/stats-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { ServiceItemComponent } from './service-item/service-item.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroSectionComponent,
    StatsSectionComponent,
    ServicesSectionComponent,
    ServiceItemComponent,
    ProjectsSectionComponent,
    ProjectItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import 'rxjs/add/operator/map';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ToursgeoComponent } from './toursgeo/toursgeo.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateComponent } from './translate/translate.component';
import { TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService } from "ng2-translate";
import { StarwarsComponent } from './starwars/starwars.component';
import { TourobjectsComponent } from './tourobjects/tourobjects.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    ToursgeoComponent,
    ContactComponent,
    HeaderComponent,
    CarouselComponent,
    NavbarComponent,
    FooterComponent,
    TranslateComponent,
    StarwarsComponent,
    TourobjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot()
  ],
  providers: [ TranslateService, { provide: TranslateLoader, useFactory: translateLoader, deps: [Http] } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function translateLoader(http: Http) { return new TranslateStaticLoader(http, 'assets/i18n', '.json')};



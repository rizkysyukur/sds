import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home/home.module';
import { HeaderModule } from './shared/template/header/header.module';
import { FooterModule } from './shared/template/footer/footer.module';
import { AboutModule } from './about/about.module';
import { CareerModule } from './career/career.module';
import { OutServiceModule } from './out-service/out-service.module';
import { ContactModule } from './contact/contact.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HeaderModule,
    FooterModule,
    AboutModule,
    CareerModule,
    OutServiceModule,
    ContactModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

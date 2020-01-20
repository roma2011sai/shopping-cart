import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './sb-modules/cart/cart.component';
import { HomeComponent } from './sb-modules/home/home.component';
import { LoginComponent } from './sb-modules/login/login.component';
import { PlpComponent } from './sb-modules/plp/plp.component';
import { RegisterComponent } from './sb-modules/register/register.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    LoginComponent,
    PlpComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

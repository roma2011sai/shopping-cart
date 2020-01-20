import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './sb-modules/cart/cart.component';
import { HomeComponent } from './sb-modules/home/home.component';
import { LoginComponent } from './sb-modules/login/login.component';
import { PlpComponent } from './sb-modules/plp/plp.component';
import { RegisterComponent } from './sb-modules/register/register.component';


const routes: Routes = [
 {path: '', component: LoginComponent},
 {path: 'login', component: LoginComponent},
 {path: 'home', component: HomeComponent},
 {path: 'plp', component: PlpComponent},
 {path: 'register', component: RegisterComponent},
 {path: 'cart', component: CartComponent}/* ,
 {path: '**', component: LoginComponent}, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

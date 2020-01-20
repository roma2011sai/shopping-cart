import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { passwordCustomValidator } from 'src/app/shared/directive/password-custom-validator.directive';
import { Router } from '@angular/router';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data.service';
//import { CartDataService } from 'src/app/services/cart-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 submitted = false;
 loginForm: FormGroup;

  constructor(private fb: FormBuilder, private route: Router,
              private shoppingCartDataService: ShoppingCartDataService,
            //  private cartData: CartDataService
             ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), passwordCustomValidator(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)]]
  });

    this.shoppingCartDataService.urlLocation.next(`${window.location.pathname}#main-content`);
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.route.navigate(['/home']);
    }
  }

}

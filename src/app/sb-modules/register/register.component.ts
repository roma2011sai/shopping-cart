import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { passwordCustomValidator } from 'src/app/shared/directive/password-custom-validator.directive';
import { MustMatch } from 'src/app/shared/directive/matchPassword.validator';
import { Router } from '@angular/router';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  passwordMatchFlag = false;

  constructor(private fb: FormBuilder, private route: Router, private shoppingCartDataService: ShoppingCartDataService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6),
                      passwordCustomValidator(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)]],
      confirmpassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmpassword')
  });
    this.shoppingCartDataService.urlLocation.next(`${window.location.pathname}#main-content`);
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.valid) {
      this.route.navigate(['/home']);
    }
  }

  checkPasswordMatch() {
    this.passwordMatchFlag = true;
  }
  checkPasswordMatchFocus() {
    this.passwordMatchFlag = false;
  }

}

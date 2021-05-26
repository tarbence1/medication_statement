import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
    password2: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
  });

  error = false;

  constructor(private router: Router, private auth: AuthenticationService) {}

  registration(): void {
    let email = this.form.get('email');
    let password = this.form.get('password1');
    this.error = false;
    if (this.form.valid) {
      if (this.form.value.password1 === this.form.value.password2) {
        this.auth.register(email?.value, password?.value);
        this.router.navigateByUrl('/login');
        return;
      }
    }
    this.error = true;
  }
}

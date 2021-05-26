import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
  });

  constructor(private router: Router, private auth: AuthenticationService) {}

  navTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  login(): void {
    let email = this.form.get('email');
    let password = this.form.get('password');
    this.auth.signIn(email?.value, password?.value).then((r) => {
      this.router.navigate(['/']);
    });
  }

  loginWithGoogle(): void {
    this.auth.googleAuth().then((r) => {
      this.router.navigate(['/']);
    });
  }
}

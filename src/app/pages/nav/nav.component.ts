import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {

  constructor(private router: Router, public auth: AuthenticationService) {}

  logout(): void {
    this.auth.signOut();
    this.router.navigateByUrl('/');
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public isLoggedIn: any;

  constructor(private auth: AngularFireAuth) {
    this.auth.onAuthStateChanged((cred) => {
    this.isLoggedIn = cred;
    });
  }

  signIn(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  signOut() {
    this.auth.signOut();
  }

  googleAuth() {
    return this.auth.signInWithPopup(new GoogleAuthProvider());
  }
}

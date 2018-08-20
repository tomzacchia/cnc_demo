import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import * as firebase from "firebase";

@Injectable()

export class AuthService {
  token: string;

  constructor(
    private router: Router
  ) { }

  // Firebase sign up user
  signUpUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .then( () => {
        console.log('Sign up was successful')
      })
      .catch( error => console.log(error) )
  }

  // Sign in user and store token in the token variable above
  signInUser(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then( response => {
          this.navigate();
          firebase.auth().currentUser.getIdToken()
            .then( (token: string) =>{
              this.token = token;
            });
      })
      .catch( error =>{
        console.log(error);
      })
  }

  // logout, voids token
  logout(){
    firebase.auth().signOut();
    this.token = null;
  }

  // in case user is signed in but token is not set, we fetch it here
  getToken(){
    firebase.auth().currentUser.getIdToken()
    .then( (token: string) =>{
      this.token = token;
    })
    return this.token;
  }

  // return true if token has been set
  isAuthenticated(){
    return this.token !== null;
  }

  // navigate to shop page if login is successful
  navigate(){
    this.router.navigate(
      ['/view-stores']
    )
  }

}

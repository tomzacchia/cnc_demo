import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginMainComponent } from "./login-main/login-main.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";



const ROUTES: Routes = [
  {path:'', component: LoginMainComponent, children:[
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
  ]}
]

@NgModule({
  imports: [ RouterModule.forChild(ROUTES)],
  exports:[ RouterModule ]
})

export class LoginRoutes{ }

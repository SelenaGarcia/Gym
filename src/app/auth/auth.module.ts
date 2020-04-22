import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { SharedModule } from "../shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";

import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations:[
        SignupComponent,
        LoginComponent,
    ],
    imports:[     
        SharedModule,
        FormsModule,
        ReactiveFormsModule,      
        AngularFireAuthModule,
        AuthRoutingModule
    ],
    exports:[]
})
export class AuthModule{}
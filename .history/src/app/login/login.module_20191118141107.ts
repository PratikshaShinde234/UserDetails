import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PasswordModule} from 'primeng/password';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {StepsModule} from 'primeng/steps';
import {PanelModule} from 'primeng/panel';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    StepsModule,
    PanelModule
  ]
})
export class LoginModule { }

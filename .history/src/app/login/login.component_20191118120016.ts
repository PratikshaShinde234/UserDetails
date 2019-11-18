import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted: boolean = false;
  public loginpg: boolean = true;
  public userdetail: boolean = false;
  public question: boolean = false;

  constructor(public fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'username': [new FormControl('', Validators.required)],
      'password': [new FormControl('', Validators.required)],
      'emailid': [new FormControl('', Validators.required)],
      'phonenum': [new FormControl('', Validators.required)],

    })
  }

  next(ev) {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      if (ev == 'login') {
        this.userdetail = true;
        this.loginpg = false;
        this.question = false;
      } else if (ev == 'userdetails') {
        this.userdetail = true;
        this.loginpg = false;
        this.question = false;

      }
    }
  }
}


